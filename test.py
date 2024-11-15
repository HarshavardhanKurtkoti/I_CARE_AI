  
from tensorflow.keras.preprocessing.image import img_to_array, load_img

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