import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    const handleImageError = () => {
        document.getElementById('background')?.classList.add('hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/80 dark:bg-black dark:text-white/80">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px] opacity-20"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                    onError={handleImageError}
                />

                <div className="relative flex min-h-screen flex-col items-center justify-center">
                    <div className="relative w-full max-w-6xl px-6">
                        {/* Navigation */}
                        <header className="flex justify-between items-center py-6 border-b border-gray-200 dark:border-gray-700">
                            {/* Logo */}
                            <div className="flex items-center space-x-2">
                                <svg
                                    className="h-8 w-auto text-red-600"
                                    viewBox="0 0 62 65"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M61.8548 14.6253C61.8778..." // You can complete this or use any icon
                                        fill="currentColor"
                                    />
                                </svg>
                                <span className="text-lg font-bold text-black dark:text-white">
                                    Sports Event System
                                </span>
                            </div>

                            {/* Only public link */}
                            <nav>
                                <Link
                                    href={route('public.events')}
                                    className="text-black dark:text-white hover:underline"
                                >
                                    View Events
                                </Link>
                            </nav>
                        </header>

                        {/* Main Content */}
                        <main className="mt-20 text-center">
                            <h1 className="text-4xl font-bold mb-4">
                                Welcome to the Sports Event Management System
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                Explore upcoming events and register your team online.
                            </p>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
