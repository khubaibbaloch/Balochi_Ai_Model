from flask import Flask, render_template, request
import pickle
import logging

app = Flask(__name__)

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Load pre-trained model and vectorizer
model = pickle.load(open('model/log_reg_model.pkl', 'rb'))
vectorizer = pickle.load(open('model/vectorizer_tfidf.pkl', 'rb'))

@app.route('/', methods=['GET', 'POST'])
def index():
    prediction = None
    sentence = None

    if request.method == 'POST':
        # Get the sentence from the form
        sentence = request.form['sentence']
        logging.debug(f"Received sentence: {sentence}")  # Log the received sentence

        # Transform the sentence using the vectorizer
        try:
            sentence_vectorized = vectorizer.transform([sentence])
            logging.debug(f"Vectorized sentence: {sentence_vectorized}")  # Log the vectorized data

            # Make a prediction using the model
            prediction = model.predict(sentence_vectorized)
            prediction = prediction[0]  # Assuming it's a string or label
            logging.debug(f"Prediction result: {prediction}")  # Log the prediction result

            # Map numerical prediction to sentiment
            if prediction == 1:
                prediction = "Positive"
            elif prediction == 0:
                prediction = "Negative"
            else:
                prediction = "Neutral"

        except Exception as e:
            logging.error(f"Error processing sentence: {e}")  # Log any error during prediction

    return render_template('index.html', prediction=prediction, sentence=sentence)

if __name__ == "__main__":
    app.run(debug=True)
