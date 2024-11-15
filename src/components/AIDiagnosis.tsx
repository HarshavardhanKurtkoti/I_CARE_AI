import React, { useState } from "react";

export function AIDiagnosis() {
  const [preview, setPreview] = useState<string | null>(null);
  const [diagnosis, setDiagnosis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string); // Set the uploaded image as preview
        setDiagnosis(null); // Reset diagnosis
      };
      reader.readAsDataURL(file);
    }
  };

  // Simulate diagnosis by calling the Flask API
  const handleDiagnosis = async () => {
    if (!preview) {
      alert("Please upload an image first!");
      return;
    }

    setLoading(true);

    try {
      const fileInput = document.getElementById("fileInput") as HTMLInputElement;
      const file = fileInput?.files?.[0];
      if (!file) {
        throw new Error("No file selected!");
      }

      // Create FormData to send the file to the API
      const formData = new FormData();
      formData.append("file", file);

      // Call the Flask API
      const response = await fetch("http://127.0.0.1:8001/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      // Get the response data
      const data = await response.json();

      // Check if there's an error in the response
      if (data.error) {
        throw new Error(data.error);
      }

      // Set the diagnosis based on the response
      setDiagnosis(`${data.prediction} (${Math.round(data.confidence * 100)}%)`);
    } catch (error) {
      console.error("Error during diagnosis:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate_animated animate_fadeIn">
          AI Diagnosis
        </h2>
        <p className="text-gray-400 mt-2 text-sm animate_animated animatefadeIn animate_delay-1s">
          Upload an image to receive a diagnosis powered by AI.
        </p>
      </div>

      {/* Image Upload */}
      <div
        className="mb-4 p-5 border-2 border-dashed border-blue-500 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 text-center text-white cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out animate_animated animatefadeIn animate_delay-2s"
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        <input
          type="file"
          accept="image/*"
          id="fileInput"
          onChange={handleImageUpload}
          className="hidden"
        />
        <p className="text-lg font-bold">Click to Upload or Drag and Drop an Image</p>
        <p className="text-sm mt-2">Supported formats: JPG, PNG</p>
      </div>

      {/* Preview */}
      {preview && (
        <div className="mb-4 animate_animated animatefadeIn animate_delay-3s">
          <p className="text-sm text-gray-400 mb-2">Uploaded Image:</p>
          <img
            src={preview}
            alt="Uploaded Preview"
            className="w-full h-auto max-h-48 object-contain rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Diagnosis Button */}
      <button
        onClick={handleDiagnosis}
        disabled={loading}
        className="w-full py-2 px-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 disabled:opacity-50 shadow-lg transition duration-300 ease-in-out"
      >
        {loading ? (
          <div className="animate-spin border-t-4 border-white border-solid w-6 h-6 rounded-full mx-auto" />
        ) : (
          "Get Diagnosis"
        )}
      </button>

      {/* Diagnosis Result */}
      {diagnosis && (
        <div className="mt-6 text-center animate_animated animatefadeIn animate_delay-4s">
          <p className="text-lg font-bold text-white">Diagnosis Result:</p>
          <p className="text-blue-400 text-2xl font-extrabold mt-2">{diagnosis}</p>
        </div>
      )}
    </div>
  );
}
