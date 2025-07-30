<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        return Inertia::render('Events/Index', [
            'events' => Event::latest()->get()
        ]);
    }
    public function publicIndex()
{
    return Inertia::render('Events/PublicIndex', [
        'events' => Event::latest()->get(),
    ]);
}


    public function create()
    {
        return Inertia::render('Events/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'date' => 'required|date',
            'location' => 'required',
        ]);

        Event::create($request->only('name', 'date', 'location'));

        return redirect()->route('events.index')->with('success', 'Event created successfully.');
    }

    public function edit(Event $event)
    {
        return Inertia::render('Events/Edit', [
            'event' => $event,
        ]);
    }

    public function update(Request $request, Event $event)
    {
        $request->validate([
            'name' => 'required',
            'date' => 'required|date',
            'location' => 'required',
        ]);

        $event->update($request->only('name', 'date', 'location'));

        return redirect()->route('events.index')->with('success', 'Event updated successfully.');
    }

    public function show(Event $event)
    {
        return Inertia::render('Events/Show', [
            'event' => $event,
        ]);
    }

    public function destroy(Event $event)
    {
        $event->delete();

        return redirect()->route('events.index')->with('success', 'Event deleted successfully.');
    }
}
