// src/pages/Home.js
import React from 'react';

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-blue-600">Welcome to PAYOLA</h1>
    <p className="mt-4 text-lg text-gray-700">
      Connecting Artists, Businesses, and Collaborators for creative projects.
    </p>
    <div className="mt-6">
      <button className="px-4 py-2 bg-blue-600 text-white rounded-full">Get Started</button>
    </div>
  </div>
);

export default Home;
