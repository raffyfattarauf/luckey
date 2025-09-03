export default function Posts() {
    return (
        <div className="min-h-screen py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Posts</h1>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Posts will be added here */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
                        <p className="text-gray-600">Posts will be available soon.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}