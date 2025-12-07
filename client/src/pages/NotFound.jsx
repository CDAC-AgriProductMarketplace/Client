// create component to show for any undefined route
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-90">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-8">The page you are looking for does not exist.</p>
            <Link to="/" className="text-blue-500 hover:underline">Go back to Home</Link>
        </div>
    );
};

export default NotFound;