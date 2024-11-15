import React, { useState } from "react";
import axios from "axios";  // Ensure you have axios installed for HTTP requests

const ImageUploader = () => {
  const [image, setImage] = useState<File | null>(null); // State to store selected image
  const [loading, setLoading] = useState(false); // To show loading state while making request
  const [prediction, setPrediction] = useState<string | null>(null); // To display prediction
  const [confidence, setConfidence] = useState<number | null>(null); // To display prediction confidence
  const [error, setError] = useState<string | null>(null); // To handle errors

  // Handle image file selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
      setPrediction(null);  // Clear previous prediction
      setConfidence(null);  // Clear previous confidence
      setError(null);       // Clear previous error
    }
  };

  // Handle image upload and prediction request
  const handleImageUpload = async () => {
    if (!image) {
      setError("Please select an image to upload.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", image); // Append the image file to FormData

    try {
      // Send POST request to Flask backend for prediction
      const response = await axios.post("http://127.0.0.1:8001/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Extract prediction data from the response
      const { prediction, confidence } = response.data;
      setPrediction(prediction); // Update prediction state
      setConfidence(confidence); // Update confidence state
    } catch (err: any) {
      setError("Error occurred while processing the image. Please try again.");
      console.error(err);
    } finally {
      setLoading(false); // Turn off loading state after request is completed
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-white mb-4">Upload Eye Image for Diagnosis</h2>
      
      {/* Image input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4 px-4 py-2 rounded-md bg-gray-600 text-white"
      />
      
      {/* Upload button */}
      <button
        onClick={handleImageUpload}
        disabled={loading}
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-500"
      >
        {loading ? "Uploading..." : "Upload Image"}
      </button>
      
      {/* Display prediction result */}
      {prediction && (
        <div className="mt-6 text-white">
          <h3 className="text-2xl font-semibold">Prediction: {prediction}</h3>
          <p className="text-lg">Confidence: {confidence ? (confidence * 100).toFixed(2) : 0}%</p>
        </div>
      )}

      {/* Display error */}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default ImageUploader;
