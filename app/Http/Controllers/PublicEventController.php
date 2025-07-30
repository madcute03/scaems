<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Inertia\Inertia;

class PublicEventController extends Controller
{
    public function index()
    {
        $events = Event::latest()->get();

        return Inertia::render('Public/Events', [
            'events' => $events
        ]);
    }
}
