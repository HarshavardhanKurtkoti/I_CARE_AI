from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from tensorflow.keras.preprocessing.image import img_to_array, load_img
from tensorflow.keras.models import load_model
import traceback
from io import BytesIO

# 1. Initialize Flask app
app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# 2. Load the model
try:
    model = load_model("disease_with_iris_classification.h5")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

# 3. Prediction route
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Check if a file is provided
        if 'file' not in request.files:
            return jsonify({'error': 'No file provided'}), 400

        # Get the file from the request
        file = request.files['file']

        # Convert the uploaded image into a format suitable for prediction
        image = load_img(BytesIO(file.read()), target_size=(224, 224))  # Resize to 224x224 as per model requirements
        image = img_to_array(image) / 255.0  # Rescale the image as done during training (normalization)
        image = np.expand_dims(image, axis=0)  # Add batch dimension

        # Check if the model is loaded properly
        if model is None:
            raise Exception("Model not loaded properly")

        # Make prediction using the loaded model
        prediction = model.predict(image)

        # Map the prediction to its respective class
        class_names = ['Normal', 'Cataract', 'Diabetes', 'Glaucoma', 'Hypertension', 'Myopia', 'Age Issues', 'Other']
        predicted_class = class_names[np.argmax(prediction)]  # Get class with highest probability

        # Return the prediction and the confidence score
        return jsonify({"prediction": predicted_class, "confidence": float(np.max(prediction))})

    except Exception as e:
        error_message = str(e)
        error_details = traceback.format_exc()
        print(f"Error: {error_message}")
        print(f"Details: {error_details}")
        return jsonify({"error": error_message, "details": error_details}), 500

# 4. Run the app
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8001)
