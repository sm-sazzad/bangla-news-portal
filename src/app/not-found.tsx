export default function NotFound() {
  return (
    <main className="min-h-[80vh] bg-white flex items-center justify-center px-6">
      <div className="text-center">
        {/* 404 */}
        <h1 className="text-[120px] md:text-[180px] font-black leading-none text-red-600">
          404
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded-full mx-auto mt-6" />

        {/* Message */}
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500 max-w-md mx-auto">
          Sorry, the page you are looking for doesn&apos;t exist or may have
          been moved.
        </p>

        {/* Back Home Button */}
        <a
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-lg bg-red-600 text-white font-semibold
                     hover:bg-red-700 transition-colors duration-200"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
