import React from "react";

export function PathologicalMyopia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          Pathological Myopia
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Pathological myopia is a severe form of nearsightedness that can lead to complications like retinal detachment and macular degeneration.
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Severe nearsightedness</li>
          <li>Retinal complications</li>
          <li>Vision changes over time</li>
        </ul>
        <p className="text-gray-300 text-lg leading-relaxed">
          Treatment may include corrective lenses, laser therapy, or surgery to manage retinal issues.
        </p>
        <div className="mt-8 text-center">
          <a
            href="https://en.wikipedia.org/wiki/Myopia"
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
