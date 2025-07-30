export default function Show({ event }) {
    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Event Details</h1>
            <p><strong>Name:</strong> {event.name}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
        </div>
    );
}
