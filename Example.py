from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("iconhome.html")

@app.route('/aboutus')
def aboutus():
    return render_template("aboutus.html")

@app.route('/service')
def service():
    return render_template("service.html")

@app.route('/contact', methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        print(f"Message received from {name} ({email}): {message}")
        # Optional: Save to file or DB
    return render_template("contact.html")

@app.route('/language')
def language():
    return render_template("language.html")

if __name__ == '__main__':
    app.run(debug=True)
