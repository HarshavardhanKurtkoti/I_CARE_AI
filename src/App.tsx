import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ThreeDExplorer } from "./components/ThreeDExplorer";
import { DiseaseLibrary } from "./components/DiseaseLibrary";
import { CataractPage } from "./components/CataractPage";
import { GlaucomaPage } from "./components/GlaucomaPage";
import { MacularDegenerationPage } from "./components/MacularDegenerationPage";
import { HypertensionPage } from "./components/HypertensionPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import AIDiagnosis from "./components/AIDiagnosis"; // Import directly from the same folder

function App() {
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchToggle = () => {
    setSearchActive(!searchActive);
    setSearchQuery("");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <header className="sticky top-0 bg-gray-900 z-10 shadow-lg py-4 px-6 flex items-center justify-between transition-all duration-500 ease-in-out hover:bg-gray-800">
          <div className="flex items-center gap-6 animate-slide-down">
            <Navigation />
          </div>

          <div className="flex items-center gap-6 animate-fade-in">
            {searchActive && (
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-3 py-1 rounded-md bg-gray-700 text-white outline-none transition-all duration-300 ease-in-out transform scale-100"
                placeholder="Search..."
                autoFocus
              />
            )}
            <button
              onClick={handleSearchToggle}
              className={`text-blue-400 hover:text-blue-500 transition-transform duration-300 ${
                searchActive ? "rotate-45 transform" : ""
              }`}
            >
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
            <button className="text-white hover:text-blue-400 transition-all duration-300 flex items-center gap-2">
              <FontAwesomeIcon icon={faSignInAlt} size="lg" />
              <span className="hidden sm:inline">Login</span>
            </button>
          </div>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <section
                  id="explorer"
                  className="py-12 animate-fade-in"
                  style={{ animationDuration: "1s" }}
                >
                  <h2 className="text-left text-3xl font-bold text-white mb-6">
                    3D Eye Explorer
                  </h2>
                  <p className="text-left text-gray-400 mb-8">
                    Dive into the intricate details of the human eye with our
                    interactive 3D visualization.
                  </p>
                  <div className="h-[600px]">
                    <ThreeDExplorer />
                  </div>
                </section>

                <section
                  id="library"
                  className="py-12 bg-gray-800 animate-fade-in"
                  style={{ animationDuration: "1.5s" }}
                >
                  <h2 className="text-left text-3xl font-bold text-white mb-6">
                    Disease Library
                  </h2>
                  <p className="text-left text-gray-400 mb-8">
                    Learn about common eye diseases and how our model focuses on
                    detecting Cataracts and Glaucoma.
                  </p>
                  <DiseaseLibrary />
                </section>

                <section
                  id="diagnosis"
                  className="py-12 bg-gray-900 animate-fade-in"
                  style={{ animationDuration: "2s" }}
                >
                  <h2 className="text-left text-3xl font-bold text-white mb-6">
                    AI Diagnosis
                  </h2>
                  <p className="text-left text-gray-400 mb-8">
                    Upload an image of the eye, and our AI will diagnose it as
                    Cataract, Glaucoma, or Normal.
                  </p>
                  <AIDiagnosis />
                </section>
              </>
            }
          />
          <Route path="/cataracts" element={<CataractPage />} />
          <Route path="/glaucoma" element={<GlaucomaPage />} />
          <Route path="/macular-degeneration" element={<MacularDegenerationPage />} />
          <Route path="/hypertension" element={<HypertensionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
