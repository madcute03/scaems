import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout
            
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="mb-6 text-lg font-bold">
                                Welcome, {auth.user.name}!
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <DashboardCard title="📋 Manage Events" link="/events" />
                                <DashboardCard title="👨‍🏫 Assign Coordinators" link="/coordinators" />
                                <DashboardCard title="📥 Approve Player Uploads" link="/uploads" />
                                <DashboardCard title="🏆 Generate Brackets" link="/brackets" />
                                <DashboardCard title="📑 Approve Protests" link="/protests" />
                                <DashboardCard title="🧰 Manage Borrowed Equipment" link="/equipment" />
                                <DashboardCard title="📢 Post Announcements" link="/announcements" />
                                <DashboardCard title="🗃️ Event Archive" link="/events/archive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function DashboardCard({ title, link }) {
    return (
        <Link
            href={link}
            className="block p-6 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl shadow transition duration-150"
        >
            <h4 className="text-base font-semibold text-blue-800">{title}</h4>
        </Link>
    );
}
