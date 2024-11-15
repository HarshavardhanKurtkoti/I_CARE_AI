from flask import Flask, request, jsonify
from tensorflow.keras.preprocessing.image import img_to_array, load_img
from io import BytesIO
import numpy as np
import tensorflow as tf

app = Flask(__name__)

# Load your model here (ensure that it's correctly loaded before prediction)
# For example:
# model = tf.keras.models.load_model('your_model_path.h5')
model = None  # Placeholder - replace with actual model loading

@app.route('/predict', methods=['POST'])
def predict():
    # Check if a file is included in the request
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    # Get the file from the request
    file = request.files['file']

    # Convert the uploaded image into a format suitable for prediction
    try:
        image = load_img(BytesIO(file.read()), target_size=(224, 224))  # Resize to 224x224 as per model requirements
        image = img_to_array(image) / 255.0  # Rescale the image as done during training (normalization)
        image = np.expand_dims(image, axis=0)  # Add batch dimension
    except Exception as e:
        return jsonify({'error': f'Error processing the image: {str(e)}'}), 400

    # Check if the model is loaded properly
    if model is None:
        return jsonify({'error': 'Model not loaded properly'}), 500

    # Make prediction using the loaded model
    try:
        prediction = model.predict(image)
    except Exception as e:
        return jsonify({'error': f'Error during prediction: {str(e)}'}), 500

    # Map the prediction to its respective class
    class_names = ['Normal', 'Cataract', 'Diabetes', 'Glaucoma', 'Hypertension', 'Myopia', 'Age Issues', 'Other']
    predicted_class = class_names[np.argmax(prediction)]  # Get class with highest probability

    # Return the prediction and the confidence score
    return jsonify({"prediction": predicted_class, "confidence": float(np.max(prediction))})

if __name__ == '__main__':
    app.run(debug=True)
