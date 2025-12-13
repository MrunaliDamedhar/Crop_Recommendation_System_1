# train_model.py
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
import joblib
import os

# ===============================
# Load dataset
# ===============================
dataset_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "Crop_recommendation.csv")
df = pd.read_csv(dataset_path)

# Features and target
X = df.drop("label", axis=1)  # replace 'label' with your target column if different
y = df["label"]

# ===============================
# Train-test split
# ===============================
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# ===============================
# Train Decision Tree model
# ===============================
model = DecisionTreeClassifier(random_state=42)
model.fit(X_train, y_train)

# ===============================
# Evaluate model
# ===============================
y_pred = model.predict(X_test)
acc = accuracy_score(y_test, y_pred)
print("Decision Tree Accuracy:", acc)

# ===============================
# Save the trained model
# ===============================
model_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "crop_model.pkl")
joblib.dump(model, model_path)
print("Model saved successfully at:", model_path)
