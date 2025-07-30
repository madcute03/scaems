import { Link } from '@inertiajs/react';

export default function PublicIndex({ events }) {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Upcoming Sports Events</h1>
            <ul className="space-y-4">
                {events.map((event) => (
                    <li key={event.id} className="border rounded p-4 shadow-sm">
                        <h2 className="text-xl font-semibold">{event.name}</h2>
                        <p className="text-gray-700">📅 {event.date}</p>
                        <p className="text-gray-700">📍 {event.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
