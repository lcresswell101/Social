<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PostController;
use Illuminate\Support\Facades\Route;

Route::post('auth/login', [AuthController::class, 'login'])->name('api.auth.login');
Route::post('auth/register', [AuthController::class, 'register'])->name('auth.register');
Route::get('post', [PostController::class, 'index']);
Route::get('post/{post}', [PostController::class, 'show']);

Route::middleware(['auth:api'])->group(function() {
    Route::post('auth/logout', [AuthController::class, 'logout'])->name('auth.logout');
    Route::post('auth/refresh', [AuthController::class, 'refresh'])->name('auth.refresh');

    Route::resource('post', PostController::class)->except([
        'index',
        'create',
        'edit',
        'show',
        'destroy',
    ]);
});
