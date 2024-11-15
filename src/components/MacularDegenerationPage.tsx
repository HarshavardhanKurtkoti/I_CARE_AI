import React from "react";

export function MacularDegenerationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          Macular Degeneration
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Macular degeneration affects the central portion of the retina, known
          as the macula, leading to vision loss. It is a common cause of vision
          impairment among older adults.
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Blurred central vision</li>
          <li>Distorted straight lines</li>
          <li>Difficulty recognizing faces</li>
        </ul>
        <p className="text-gray-300 text-lg leading-relaxed">
          There is no cure for macular degeneration, but treatments like
          injections, laser therapy, or lifestyle changes can slow its
          progression.
        </p>
        <div className="mt-8 text-center">
          <a
            href="https://en.wikipedia.org/wiki/Age-related_macular_degeneration"
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
