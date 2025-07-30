import { useForm } from '@inertiajs/react';

export default function Edit({ event }) {
    const { data, setData, put, processing, errors } = useForm({
        name: event.name,
        date: event.date,
        location: event.location,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('events.update', event.id));
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Event</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block">Name</label>
                    <input
                        type="text"
                        className="w-full border px-3 py-2"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>

                <div>
                    <label className="block">Date</label>
                    <input
                        type="date"
                        className="w-full border px-3 py-2"
                        value={data.date}
                        onChange={(e) => setData('date', e.target.value)}
                    />
                    {errors.date && <p className="text-red-500">{errors.date}</p>}
                </div>

                <div>
                    <label className="block">Location</label>
                    <input
                        type="text"
                        className="w-full border px-3 py-2"
                        value={data.location}
                        onChange={(e) => setData('location', e.target.value)}
                    />
                    {errors.location && <p className="text-red-500">{errors.location}</p>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Update
                </button>
            </form>
        </div>
    );
}
