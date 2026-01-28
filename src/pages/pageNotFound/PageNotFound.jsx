import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        {/* 404 */}
        <h1 className="text-7xl font-extrabold text-[var(--main-color)] mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-xl bg-[var(--main-color)] text-white font-medium hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;