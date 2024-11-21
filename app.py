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
    error_message = None
    sentence = None  # Always initialize as None

    if request.method == 'POST':
        sentence = request.form['sentence'].strip()

        if not sentence:
            error_message = "Please enter a sentence to analyze its sentiment."
        else:
            # Vectorize and predict the sentiment
            try:
                sentence_vectorized = vectorizer.transform([sentence])
                prediction = model.predict(sentence_vectorized)[0]

                # Map prediction to sentiment
                if prediction == 1:
                    prediction = "Positive"
                elif prediction == 0:
                    prediction = "Negative"
                else:
                    prediction = "Neutral"

                # Clear the sentence (though this won't matter since we're not using it anymore)
                sentence = None

            except Exception as e:
                error_message = f"An error occurred: {str(e)}"

    return render_template('index.html', prediction=prediction, error_message=error_message)



if __name__ == "__main__":
    app.run(debug=True)
