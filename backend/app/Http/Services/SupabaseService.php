<?php

namespace App\Services;

use Supabase\SupabaseClient;

class SupabaseService
{
    protected $supabase;

    public function __construct()
    {
        $this->supabase = new SupabaseClient(
            env('SUPABASE_URL'),
            env('SUPABASE_KEY')
        );
    }

    public function getPosts()
    {
        // Fetch the posts from Supabase
        $response = $this->supabase->from('posts')->select('*')->execute();

        // Check if there was an error with the request
        if ($response->getError()) {
            return null; // Or you can return a more informative error
        }

        $data = $response->getData();

        // If no posts are returned, return null
        if (empty($data)) {
            return null;
        }

        return $data;
    }
}
