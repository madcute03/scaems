<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\EventController; // ✅ Make sure this is here

use App\Http\Controllers\PublicEventController;




Route::get('/events/public', [PublicEventController::class, 'index'])->name('public.events');


Route::get('/public-events', [EventController::class, 'publicIndex'])->name('public.events');
// ✅ Public Route (No login)
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
         
    ]);
})->name('welcome');


// ✅ Dashboard (Requires Login)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// ✅ Authenticated Routes Group
Route::middleware('auth')->group(function () {
    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Events
    Route::resource('events', EventController::class)->names([
        'index' => 'events.index',
        'create' => 'events.create',
        'store' => 'events.store',
        'edit' => 'events.edit',
        'update' => 'events.update',
        'destroy' => 'events.destroy',
        'show' => 'events.show',
    ]);
});

// Auth routes (login, register, etc.)
require __DIR__.'/auth.php';
