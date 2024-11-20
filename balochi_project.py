import pickle
import pandas as pd
import nltk
from nltk.tokenize import word_tokenize
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from nltk.corpus import stopwords
import string
import re
import spacy
from spacy.language import Language
from spacy.tokens import Span
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, precision_score, recall_score
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, SimpleRNN, Dense
from tensorflow.keras.preprocessing.sequence import pad_sequences

# Download necessary NLTK datasets
nltk.download('stopwords')
nltk.download('punkt')

# Load SpaCy model
nlp = spacy.load("en_core_web_sm")

# Load dataset
my_data = pd.read_excel("BALOCHI-CORPUS 5000.xlsx")

# Rename columns to match the expected names
my_data.columns = ['label', 'text']  # Rename columns for consistency
my_data.dropna(inplace=True)
my_data['label'] = my_data['label'].astype(int)

# Tokenization function
def tokenize(text):
    if isinstance(text, str):
        return word_tokenize(text)
    else:
        return []  # Placeholder for non-string input

# Apply tokenization
my_data['tokens'] = my_data['text'].apply(tokenize)

# Define punctuation for English and Urdu
urdu_punctuation = '۔ ، ؛ ؟ '
all_punctuations = string.punctuation + urdu_punctuation

# Remove punctuation function
def remove_punctuations(text):
    if not isinstance(text, str):
        text = str(text)
    return re.sub(r'[^\w\s]', '', text)

# Remove punctuation from the sentences
my_data['cleaned_text'] = my_data['text'].apply(remove_punctuations)

# Define Balochi stop words list
balochi_stop_words = [
    "من", "تو", "آ", "اے", "ما", "اودا", "ادا", "آہانی", "اش", "اشانی",
    "اشی", "مارا", "شما", "شمارا", "بلے", "یا", "اے", "ایں", "پہ", "گوں",
    "انچو", "کہ", "آ", "ءَ", "ءِ", "ءُ", "یک", "اگاں", "گڑا", "چہ",
    "سرا", "چوکہ", "مان", "نیاما", "انت","ء","ات","ایشانی","ایشی"
]

# Stop words removal function
def remove_stop_words(text):
    words = word_tokenize(text)
    filtered_words = [word for word in words if word not in balochi_stop_words]
    filtered_text = ' '.join(filtered_words)
    return filtered_text

# Apply stop words removal
my_data['cleaned_text'] = my_data['cleaned_text'].apply(remove_stop_words)

# Clean up columns and prepare the data
my_data.dropna(inplace=True)

# Feature extraction using Bag-of-Words and TF-IDF
vectorizer_bow = CountVectorizer(encoding='utf-8', max_features=10000)
vectorizer_tfidf = TfidfVectorizer(encoding='utf-8', max_features=10000)

# Apply feature extraction (TF-IDF or BoW)
X_bow = vectorizer_bow.fit_transform(my_data['cleaned_text']).toarray()
X_tfidf = vectorizer_tfidf.fit_transform(my_data['cleaned_text']).toarray()

# Assign labels
y = my_data['label']

# Train-test split
X_train_bow, X_test_bow, y_train, y_test = train_test_split(X_bow, y, test_size=0.2, random_state=42)
X_train_tfidf, X_test_tfidf, _, _ = train_test_split(X_tfidf, y, test_size=0.2, random_state=42)

# Train Logistic Regression model on TF-IDF features
log_reg_model = LogisticRegression()
log_reg_model.fit(X_train_tfidf, y_train)
y_pred_log_reg = log_reg_model.predict(X_test_tfidf)

# Evaluate model performance
def evaluate_model(y_true, y_pred, model_name):
    accuracy = accuracy_score(y_true, y_pred)
    precision = precision_score(y_true, y_pred, average='weighted')
    recall = recall_score(y_true, y_pred, average='weighted')
    print(f"{model_name} - Accuracy: {accuracy:.4f}, Precision: {precision:.4f}, Recall: {recall:.4f}")

evaluate_model(y_test, y_pred_log_reg, "Logistic Regression")

# Save the Logistic Regression model and vectorizer for future use
with open('model/log_reg_model.pkl', 'wb') as model_file:
    pickle.dump(log_reg_model, model_file)

# Save the TF-IDF vectorizer
with open('model/vectorizer_tfidf.pkl', 'wb') as vectorizer_file:
    pickle.dump(vectorizer_tfidf, vectorizer_file)


# Function for sentiment prediction (using Logistic Regression or another model)
def predict_sentiment(sentence, model, vectorizer):
    sentence_transformed = vectorizer.transform([sentence])
    prediction = model.predict(sentence_transformed)[0]
    if prediction == 1:
        return "Positive"
    elif prediction == 0:
        return "Negative"
    else:
        return "Neutral"

# Example usage (Logistic Regression)
sentence = input("Enter a sentence to analyze: ")
# Load the saved model and vectorizer for prediction
with open('model/log_reg_model.pkl', 'rb') as model_file:
    loaded_model = pickle.load(model_file)

with open('model/vectorizer_tfidf.pkl', 'rb') as vectorizer_file:
    loaded_vectorizer = pickle.load(vectorizer_file)

    

# Predict sentiment
result = predict_sentiment(sentence, loaded_model, loaded_vectorizer)
print("Sentiment:", result)
