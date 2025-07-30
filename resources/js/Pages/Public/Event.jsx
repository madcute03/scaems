// resources/js/Pages/Public/Events.jsx

import { Head } from '@inertiajs/react';

export default function Events({ events }) {
    return (
        <>
            <Head title="Events" />
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white p-6 shadow rounded-lg">
                    <h1 className="text-2xl font-bold mb-4">🏟️ Available Events</h1>
                    {events.length > 0 ? (
                        <ul className="space-y-4">
                            {events.map((event) => (
                                <li key={event.id} className="border p-4 rounded">
                                    <h2 className="text-xl font-semibold">{event.name}</h2>
                                    <p className="text-gray-600">📅 {event.date}</p>
                                    <p className="text-gray-600">📍 {event.location}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No events available at the moment.</p>
                    )}
                </div>
            </div>
        </>
    );
}
