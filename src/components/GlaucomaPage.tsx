import React from "react";

export function GlaucomaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          Glaucoma
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Glaucoma is a group of eye conditions that damage the optic nerve,
          often due to high intraocular pressure. It can lead to blindness if
          untreated.
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Loss of peripheral vision</li>
          <li>Halos around lights</li>
          <li>Redness in the eye</li>
        </ul>
        <p className="text-gray-300 text-lg leading-relaxed">
          Early diagnosis is key to managing glaucoma. Treatments include eye
          drops, medications, laser therapy, or surgery to lower eye pressure.
        </p>
        <div className="mt-8 text-center">
          <a
            href="https://en.wikipedia.org/wiki/Glaucoma"
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
