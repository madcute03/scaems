import { Link, router } from '@inertiajs/react';

export default function Index({ events }) {
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this event?')) {
            router.delete(route('events.destroy', id));
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">All Events</h1>
            <Link href={route('events.create')} className="bg-blue-600 text-white px-4 py-2 rounded">
                Add Event
            </Link>
            <ul className="mt-4 space-y-4">
                {events.map(event => (
                    <li key={event.id} className="border p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">{event.name}</h2>
                        <p>{event.date} – {event.location}</p>
                        <div className="flex space-x-2 mt-2">
                            <Link
                                href={route('events.show', event.id)}
                                className="text-blue-600 hover:underline"
                            >
                                View
                            </Link>
                            <Link
                                href={route('events.edit', event.id)}
                                className="text-green-600 hover:underline"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={() => handleDelete(event.id)}
                                className="text-red-600 hover:underline"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
