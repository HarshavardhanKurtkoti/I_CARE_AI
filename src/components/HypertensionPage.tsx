import React from "react";

export function HypertensionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          Hypertension
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Hypertension, or high blood pressure, is a common condition in which the
          force of the blood against the walls of the arteries is consistently too
          high. If left untreated, it can lead to serious health problems, such as heart disease,
          stroke, and kidney damage.
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Frequent headaches</li>
          <li>Dizziness or lightheadedness</li>
          <li>Shortness of breath</li>
          <li>Chest pain</li>
          <li>Blurred vision</li>
        </ul>
        <p className="text-gray-300 text-lg leading-relaxed">
          Managing hypertension typically involves lifestyle changes, such as improving diet,
          increasing physical activity, and taking prescribed medications.
        </p>
        <div className="mt-8 text-center">
          <a
            href="https://en.wikipedia.org/wiki/Hypertensive_retinopathy"
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
