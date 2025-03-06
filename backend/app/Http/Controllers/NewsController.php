<?php

namespace App\Http\Controllers;


use App\Models\OfflineArticle;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;


class NewsController extends Controller
{
    protected $newsApiKey;

    public function __construct()
    {
        $this->newsApiKey = config('app.news_api_key');
        // Log::info('News API Key:', ['key' => $this->newsApiKey]);

        $clerkPublicKey = config('app.clerk_pem_public_key');
        // Log::info('Clerk Public Key:', ['key' => $clerkPublicKey]);


    }


    /**
     * Fetch top headlines based on category, country, or sources.
     */
    public function getTopHeadlines(Request $request)
    {
        $country = $request->query('country', 'us'); // Default to 'us'
        $category = $request->query('category'); // Optional category filter
        $sources = $request->query('sources'); // Optional sources filter

        // Validate that sources and country/category are not mixed
        if ($sources && ($country || $category)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Cannot mix sources with country or category.'
            ], 400);
        }

        $cacheKey = "top-headlines-{$country}-{$category}-{$sources}";
        $news = Cache::remember($cacheKey, 300, function () use ($country, $category, $sources) {
            // Build query parameters
            $query = [
                'apiKey' => $this->newsApiKey,
                'country' => $sources ? null : $country,
                'category' => $sources ? null : $category,
                'sources' => $sources,
                'pageSize' => 20,
            ];

            // Make API request
            $response = Http::get('https://newsapi.org/v2/top-headlines', array_filter($query));

            if ($response->successful()) {
                $news = $response->json();
                return $news['articles'] ?? [];
            }

            return [];
        });

        return response()->json([
            'status' => 'success',
            'articles' => $news
        ]);
    }

    /**
     * Fetch all articles based on a keyword, sources, or domain.
     */
    public function getEverything(Request $request)
    {
        $query = [
            'apiKey' => $this->newsApiKey,
            'q' => $request->query('q', 'news'), // Default to 'news' if no query provided
            'sources' => $request->query('sources'), // Specific sources
            'domains' => $request->query('domains'), // Restrict to domains
            'excludeDomains' => $request->query('excludeDomains'), // Exclude certain domains
            'from' => $request->query('from'), // Date filter (YYYY-MM-DD)
            'to' => $request->query('to'),
            'language' => $request->query('language', 'en'), // Default to English
            'sortBy' => $request->query('sortBy', 'publishedAt'), // Sort by relevancy, popularity, or date
            'pageSize' => 20,
            'page' => $request->query('page', 1),
        ];

        $response = Http::get('https://newsapi.org/v2/everything', array_filter($query));

        if ($response->successful()) {
            $news = $response->json();
            return response()->json([
                'status' => 'success',
                'articles' => $news['articles'] ?? []
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch articles from News API.'
            ], $response->status());
        }
    }

    /**
     * Fetch available news sources based on category, language, or country.
     */
    public function getSources(Request $request)
    {
        $query = [
            'apiKey' => $this->newsApiKey,
            'category' => $request->query('category'), // Optional category filter
            'language' => $request->query('language', 'en'), // Default to English
            'country' => $request->query('country'), // Optional country filter
        ];

        $response = Http::get('https://newsapi.org/v2/top-headlines/sources', array_filter($query));

        if ($response->successful()) {
            $sources = $response->json();
            return response()->json([
                'status' => 'success',
                'sources' => $sources['sources'] ?? []
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch sources from News API.'
            ], $response->status());
        }
    }


    /***
     * Fet single article
     */
    public function getArticle(Request $request, $articleId)
    {
        // Use the article URL or title as the query
        $query = [
            'apiKey' => $this->newsApiKey,
            'q' => $articleId, // Use article ID, URL, or title as the query
            'pageSize' => 1, // Fetch only one article
        ];

        $response = Http::get('https://newsapi.org/v2/everything', array_filter($query));

        if ($response->successful()) {
            $article = $response->json();
            return response()->json([
                'status' => 'success',
                'article' => $article['articles'][0] ?? null
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch article from News API.'
            ], $response->status());
        }
    }

    /**
     * Save an article for offline reading.
     */
    public function saveForOffline(Request $request)
    {

        Log::info('Request Data:', $request->all());

        $request->validate([
            'title' => 'required|string',
            'description' => 'nullable|string',
            'url' => 'required|url|unique:offline_articles,url',
            'url_to_image' => 'nullable|url',
        ]);

        $article = OfflineArticle::create([
            'title' => $request->title,
            'description' => $request->description,
            'url' => $request->url,
            'url_to_image' => $request->url_to_image,
        ]);

        return response()->json([
            'status' => 'success',
            'article' => $article
        ], 201);
    }

    /**
     * Get all saved offline articles.
     */
    public function getOfflineArticles()
    {
        $articles = OfflineArticle::all();
        return response()->json([
            'status' => 'success',
            'articles' => $articles
        ]);
    }


}
