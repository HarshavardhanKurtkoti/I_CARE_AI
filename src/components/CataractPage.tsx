import React from "react";

export function CataractPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          Cataracts
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Cataracts occur when the natural lens of the eye becomes cloudy. They
          often develop with aging but can also result from trauma, diabetes, or
          prolonged UV exposure.
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Blurred or cloudy vision</li>
          <li>Difficulty with bright lights</li>
          <li>Colors may appear faded</li>
        </ul>
        <p className="text-gray-300 text-lg leading-relaxed">
          Surgery is the most effective treatment for cataracts. It involves
          replacing the cloudy lens with a clear artificial one, restoring
          vision.
        </p>
        <div className="mt-8 text-center">
          <a
            href="https://en.wikipedia.org/wiki/Cataract"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-400 hover:shadow-xl focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
