'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts from Laravel API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/posts');
        const data = response.data;

        // Check if there are posts or an error message
        if (data.message) {
          setError(data.message);
        } else {
          setPosts(data);
        }
      } catch (err) {
        // Handle error properly by checking its type
        if (err instanceof Error) {
          setError(err.message); 
        } else if (typeof err === 'string') {
          setError(err); 
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <h1 className="text-5xl font-bold underline">Welcome to Strictly African</h1>
      <p className="text-lg">Stay updated on news, culture, and shop unique African merchandise!</p>

      <Button>Click me</Button>

      <div className="mt-4">
        <h2 className="text-2xl font-bold">Posts</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : posts.length === 0 ? (
          <p>No posts have been created</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="my-4 p-4 border border-gray-300">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p>{post.content}</p>
              <p className="text-sm text-gray-500">Posted on {post.created_at}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}