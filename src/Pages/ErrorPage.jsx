import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-[80vh] bg-gray-100 px-4 py-10">
      <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-xl font-semibold mb-2">
          Page not found.
        </p>
        <p className="text-gray-600 mb-6">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
    );
};

export default ErrorPage;