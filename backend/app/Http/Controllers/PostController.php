<?php
namespace App\Http\Controllers;

use App\Services\SupabaseService;

class PostController extends Controller
{
    protected $supabaseService;

    public function __construct(SupabaseService $supabaseService)
    {
        $this->supabaseService = $supabaseService;
    }

    public function index()
    {
        $posts = $this->supabaseService->getPosts();

        // Check if there are no posts
        if (is_null($posts)) {
            return response()->json([
                'message' => 'No posts have been created',
            ], 404); // Return a 404 for no posts
        }

        // Clean and format the posts
        $cleanedPosts = $this->cleanPosts($posts);

        return response()->json($cleanedPosts);
    }

    // Helper function to clean and format posts
    protected function cleanPosts(array $posts)
    {
        return array_map(function ($post) {
            return [
                'id' => $post['id'],
                'title' => $this->sanitizeText($post['title']),
                'content' => $this->sanitizeText($post['content']),
                'created_at' => $this->formatDate($post['created_at']),
            ];
        }, $posts);
    }

    // Sanitize text to remove unnecessary characters or HTML tags
    protected function sanitizeText($text)
    {
        return strip_tags(trim($text));
    }

    // Format the date to a readable format
    protected function formatDate($date)
    {
        return date('F j, Y', strtotime($date)); // Example: 'March 1, 2025'
    }
}
