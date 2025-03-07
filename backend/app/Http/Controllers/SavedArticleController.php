<?php

namespace App\Http\Controllers;

use App\Models\SavedArticle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SavedArticleController extends Controller
{
    // Save an article for offline reading
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'url' => 'required|url',
            'url_to_image' => 'nullable|url',
        ]);

        $article = SavedArticle::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'description' => $request->description,
            'url' => $request->url,
            'url_to_image' => $request->url_to_image,
        ]);

        return response()->json($article, 201);
    }

    // Get all saved articles for the authenticated user
    public function index()
    {
        $articles = SavedArticle::where('user_id', Auth::id())->get();
        return response()->json($articles);
    }

    // Delete a saved article
    public function destroy($id)
    {
        $article = SavedArticle::where('user_id', Auth::id())->findOrFail($id);
        $article->delete();
        return response()->json(null, 204);
    }
}
