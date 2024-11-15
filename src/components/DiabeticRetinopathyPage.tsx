// File: src/components/DiabeticRetinopathyPage.tsx
import React from "react";

export function DiabeticRetinopathyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          Diabetic Retinopathy
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Diabetic retinopathy is a diabetes complication that affects the eyes. It's caused by damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina).
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Blurred vision</li>
          <li>Fluctuating vision</li>
          <li>Dark or empty areas in vision</li>
          <li>Difficulty with color perception</li>
          <li>Vision loss in severe cases</li>
        </ul>
        <p className="text-gray-300 text-lg leading-relaxed">
          Early diabetic retinopathy may not cause noticeable symptoms, but managing blood sugar levels, blood pressure, and cholesterol, along with regular eye exams, are key to preventing further damage.
        </p>
        <div className="mt-8 text-center">
          <a
            href="https://en.wikipedia.org/wiki/Diabetic_retinopathy"
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
