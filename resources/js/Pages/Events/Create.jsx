import { useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, errors } = useForm({
        name: '',
        date: '',
        location: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('events.store'));
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">➕ Add New Event</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block">Event Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    {errors.name && <p className="text-red-600">{errors.name}</p>}
                </div>

                <div>
                    <label className="block">Date</label>
                    <input
                        type="date"
                        value={data.date}
                        onChange={e => setData('date', e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    {errors.date && <p className="text-red-600">{errors.date}</p>}
                </div>

                <div>
                    <label className="block">Location</label>
                    <input
                        type="text"
                        value={data.location}
                        onChange={e => setData('location', e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    {errors.location && <p className="text-red-600">{errors.location}</p>}
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded"
                >
                    ✅ Save
                </button>
            </form>
        </div>
    );
}
