<?php

namespace App\Http\Controllers\Api;

use App\Events\PostCreatedEvent;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class PostController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function index()
    {
        $posts = Post::query()->latest()->with('user')->get();

        return response()->json([
            'status' => 'success',
            'posts' => json_decode($posts),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        $post = auth()->user()->posts()->create($validated);

        Redis::sadd('posts', json_encode($post->toArray()));

        PostCreatedEvent::dispatch($post);

        return response()->json([
            'post' => $post,
            'status' => 'success',
        ]);
    }

    public function show(Post $post)
    {
        return response()->json([
            'post' => $post,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
