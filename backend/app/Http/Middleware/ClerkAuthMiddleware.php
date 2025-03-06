<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ClerkAuthMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $authorizationHeader = $request->header('Authorization');

        if (!$authorizationHeader || !str_starts_with($authorizationHeader, 'Bearer ')) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $token = substr($authorizationHeader, 7);

        try {
            // Decode JWT using Clerk public key
            $decoded = JWT::decode($token, new Key(env('CLERK_PEM_PUBLIC_KEY'), 'RS256'));

            // Log the decoded token for debugging
            \Log::info('Decoded JWT:', (array) $decoded);

            // Find or create user in Laravel
            $user = User::firstOrCreate(
                ['clerk_id' => $decoded->sub],
                ['name' => $decoded->name ?? 'Clerk User', 'email' => $decoded->email ?? null]
            );

            Auth::login($user);

            return $next($request);

        } catch (\Exception $e) {
            \Log::error('JWT Decode Error:', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Invalid token'], 401);
        }
    }
}
