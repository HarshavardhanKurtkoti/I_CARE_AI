import React from "react";
import { Brain, Eye, Shield } from "lucide-react";

interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const features: Feature[] = [
  {
    name: "3D Visualization",
    description: "Explore the human eye in stunning 3D detail",
    icon: Eye,
  },
  {
    name: "AI-Powered Analysis",
    description: "Advanced disease detection using machine learning",
    icon: Brain,
  },
  {
    name: "Secure & Private",
    description: "Your medical data is protected and encrypted",
    icon: Shield,
  },
];

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 text-white">
      {/* Video Card Section with Full-Page Fit */}
      <div className="container mx-auto px-6 py-12 flex justify-center">
        <a
          href="https://videos.pexels.com/video-files/3327253/3327253-sd_640_360_24fps.mp4"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 w-full"
        >
          <video
            autoPlay
            loop
            muted
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
          >
            <source
              src="https://videos.pexels.com/video-files/3327253/3327253-sd_640_360_24fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center transition-opacity duration-500 hover:opacity-90">
            {/* Overlay Text */}
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Understand Your Eye Health
            </h1>
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-500">
              With AI Precision
            </h1>
            <p className="text-gray-300 text-base sm:text-lg mt-4">
              Explore eye diseases through interactive 3D visualization and
              AI-assisted diagnosis. Get detailed insights into various eye
              conditions and treatment options.
            </p>
            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <a
                href="#explorer"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium shadow-lg transition-transform duration-300 hover:scale-105"
              >
                Start Exploring
              </a>
              <a
                href="#diagnosis"
                className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-md text-white font-medium shadow-lg transition-transform duration-300 hover:scale-105"
              >
                Try AI Diagnosis
              </a>
            </div>
          </div>
        </a>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="p-6 bg-gray-800 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <feature.icon className="h-10 w-10 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold">{feature.name}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
