from flask import Flask, render_template, request, redirect, url_for
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://vanirudha95:fds_project@fdsproject.2l2ya.mongodb.net/sample"
mongo = PyMongo(app)


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # Handle Sign In logic here
        email = request.form.get("signin-email")
        password = request.form.get("signin-password")

        # Check if user exists and password matches
        user = mongo.db.user_data.find_one({"email": email})
        if user and user["pass"] == password:
            # Successful login logic (redirect to dashboard, etc.)
            return redirect(url_for("home_page"))
        else:
            return render_template('login.html', result_message="Invalid email or password.")

    return render_template('login.html')


@app.route("/signup", methods=["POST", "GET"])
def signup():
    result_message = None  # Initialize the message variable

    if request.method == "POST":
        email = request.form.get("signup-email")
        if mongo.db.user_data.find_one({"email": email}):
            result_message = "Account with the same Email-ID already exists."
            return render_template('signup.html', result_message=result_message)  # Return to login with message
        else:
            name = request.form.get("signup-name")
            password = request.form.get("signup-password")  # Use the correct field name
            mongo.db.user_data.insert_one({"email": email, "user": name, "pass": password})  # Use insert_one
            result_message = "Account created successfully!"
            return redirect(url_for("login"))  # Return to login with success message

    return render_template('signup.html', result_message=result_message)


@app.route("/homepage", methods = ["POST", "GET"])
def home_page():
    return render_template("home_page.html")  # Placeholder for your dashboard


if __name__ == "__main__":
    app.run(debug=True)
