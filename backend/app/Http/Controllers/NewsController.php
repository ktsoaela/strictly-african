<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class NewsController extends Controller
{
    public function index()
    {
        $newskey = env('NEWS_API_KEY');
        
        $response = Http::get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' . $newskey);
        
        $news = $response->json();
        
        if (isset($news['articles'])) {
            return response()->json([
                'status' => 'success',
                'articles' => $news['articles']
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'No articles found or an error occurred with the News API.'
            ]);
        }
    }
}
