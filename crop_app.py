import csv
from io import StringIO
from flask import Flask, render_template, request, redirect, url_for, session, make_response
import joblib
from datetime import datetime
import os

# ---------------- Flask App Setup ----------------
app = Flask(__name__)
app.secret_key = "your_secret_key_here"  # Replace with a secure key

# ---------------- Load ML Model ----------------
MODEL_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'crop_model.pkl')

def load_model(path):
    if not os.path.exists(path):
        print(f"Error: Model file not found at {path}")
        return None
    try:
        model = joblib.load(path)
        print("Model loaded successfully")
        return model
    except Exception as e:
        print(f"Error loading model: {e}")
        return None

model = load_model(MODEL_PATH)

# ---------------- Admin email ----------------
ADMIN_EMAIL = "admin@gmail.com"

# ---------------- In-memory storage ----------------
users = {}  # Temporary storage for users (lost on restart)
prediction_history = []  # Temporary storage for predictions

# ------------------------- Routes -------------------------
@app.route('/')
def home():
    return render_template('Home_1.html')

@app.route('/iconhome')
def iconhome():
    return render_template('iconhome.html')

@app.route('/aboutus')
def aboutus():
    return render_template('aboutus.html')

@app.route('/service')
def service():
    return render_template('service.html')

@app.route('/language')
def language():
    return render_template('language.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        if not request.form.get('name') or not request.form.get('email') or not request.form.get('message'):
            return "Please fill all fields."
        return render_template('succes.html')
    return render_template('contact.html')

# ------------------------- Login & Register -------------------------
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        password = request.form.get('password')
        confirm = request.form.get('confirm_password')

        if not all([name, email, password, confirm]):
            return render_template('Login.html', register_error="All fields are required.")

        if password != confirm:
            return render_template('Login.html', register_error="Passwords do not match.")

        if email in users:
            return render_template('Login.html', register_error="Email already registered.")

        users[email] = {"name": name, "password": password}
        return render_template('Login.html', register_success="Registration successful! Please login.")

    return render_template('Login.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        if email not in users or users[email]["password"] != password:
            return render_template('Login.html', error="Invalid email or password.")

        session['user_email'] = email
        return redirect(url_for('dashboard'))

    return render_template('Login.html')

@app.route('/logout')
def logout():
    session.pop('user_email', None)
    return redirect(url_for('home'))

# ------------------------- Dashboard & Prediction -------------------------
@app.route('/dashboard')
def dashboard():
    if 'user_email' not in session:
        return redirect(url_for('login'))
    return render_template('dashboard.html', user=session['user_email'])

@app.route('/predict')
def predict():
    if 'user_email' not in session:
        return redirect(url_for('login'))
    return render_template('Index.html')

@app.route('/form', methods=['POST'])
def form():
    if 'user_email' not in session:
        return redirect(url_for('login'))

    if model is None:
        return "Prediction model is not loaded. Please contact the admin."

    try:
        Nitrogen = float(request.form['Nitrogen'])
        Phosphorus = float(request.form['Phosphorus'])
        Potassium = float(request.form['Potassium'])
        Temperature = float(request.form['Temperature'])
        Humidity = float(request.form['Humidity'])
        ph = float(request.form['ph'])
        Rainfall = float(request.form['Rainfall'])

        prediction = model.predict([[Nitrogen, Phosphorus, Potassium,
                                     Temperature, Humidity, ph, Rainfall]])[0]

        prediction_history.append({
            "email": session['user_email'],
            "nitrogen": Nitrogen,
            "phosphorus": Phosphorus,
            "potassium": Potassium,
            "temperature": Temperature,
            "humidity": Humidity,
            "ph": ph,
            "rainfall": Rainfall,
            "crop": prediction,
            "time": datetime.now()
        })

        return render_template('prediction.html', prediction=prediction)

    except ValueError as ve:
        return f"Invalid input: {ve}"
    except Exception as e:
        return f"Error during prediction: {e}"

# ------------------------- Admin Only Routes -------------------------
@app.route('/history')
def history():
    if 'user_email' not in session:
        return redirect(url_for('login'))
    if session['user_email'] != ADMIN_EMAIL:
        return "Access Denied"
    return render_template('admin_history.html', data=prediction_history)

@app.route('/download_csv')
def download_csv():
    if 'user_email' not in session or session['user_email'] != ADMIN_EMAIL:
        return "Access Denied"

    si = StringIO()
    cw = csv.writer(si)
    cw.writerow(["Email", "N", "P", "K", "Temp", "Humidity", "pH", "Rainfall", "Crop", "Time"])
    for row in prediction_history:
        cw.writerow([
            row["email"], row["nitrogen"], row["phosphorus"], row["potassium"],
            row["temperature"], row["humidity"], row["ph"], row["rainfall"],
            row["crop"], row["time"]
        ])
    output = make_response(si.getvalue())
    output.headers["Content-Disposition"] = "attachment; filename=predictions.csv"
    output.headers["Content-type"] = "text/csv"
    return output

# ------------------------- Run App -------------------------
if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
