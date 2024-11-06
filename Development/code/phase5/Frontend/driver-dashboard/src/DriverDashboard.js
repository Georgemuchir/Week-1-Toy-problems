import React from 'react';

const DriverDashboard = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center p-4">
      {/* Header */}
      <header className="bg-gray-800 text-white w-full text-center py-4 text-2xl font-bold">
        Driver Dashboard
      </header>

      {/* Form Container */}
      <div className="bg-white w-full max-w-md mt-8 p-6 rounded-lg shadow-lg">
        <h2 className="text-gray-800 text-xl font-semibold mb-4">Add Driver</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter driver name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter driver email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Phone Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Phone</label>
          <input
            type="tel"
            placeholder="Enter driver phone number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-gray-700 text-white font-semibold py-2 rounded-md hover:bg-gray-800">
          Add Driver
        </button>
      </div>
    </div>
  );
};

export default DriverDashboard;
