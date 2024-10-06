from flask import Flask, render_template, request, redirect, url_for,session, flash
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config["SECRET_KEY"] = "xYzAbC"

app.config["MONGO_URI"] = "mongodb+srv://vanirudha95:fds_project@fdsproject.2l2ya.mongodb.net/"
mongo1 = PyMongo(app, uri = "mongodb+srv://vanirudha95:fds_project@fdsproject.2l2ya.mongodb.net/sample")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # Handle Sign In logic here

        email = request.form.get("signin-email")
        password = request.form.get("signin-password")
        session['email'] = email
        # Check if user exists and password matches
        user = mongo1.db.user_data.find_one({"email": email})
        is_admin = user.get('is_admin')
        session['is_admin'] = is_admin
        if user and user["pass"] == password:
            # Successful login logic (redirect to dashboard, etc.)
            print("Signed in")
            return redirect(url_for("home_page"))
        else:
            return render_template('login.html', result_message="Invalid email or password.")

    return render_template('login.html')


@app.route("/signup", methods=["POST", "GET"])
def signup():
    result_message = None  # Initialize the message variable

    if request.method == "POST":
        email = request.form.get("signup-email")
        if mongo1.db.user_data.find_one({"email": email}):
            result_message = "Account with the same Email-ID already exists."
            return render_template('signup.html', result_message=result_message)  # Return to login with message
        else:
            name = request.form.get("signup-name")
            password = request.form.get("signup-password")  # Use the correct field name
            mongo1.db.user_data.insert_one({"email": email, "user": name, "pass": password})  # Use insert_one
            result_message = "Account created successfully!"
            return redirect(url_for("login"))  # Return to login with success message

    return render_template('signup.html', result_message=result_message)


@app.route("/homepage", methods = ["POST", "GET"])
def home_page():
    return render_template("home_page.html", is_admin = session.get('is_admin'))  # Placeholder for your dashboard

@app.route("/salary_predictor", methods = ["POST", "GET"])
def salary_predictor():

    if request.method == "POST":
        print("i am here")
        email = session.get('email')
        age = request.form.get("age")
        gender = request.form.get("gender")
        ed_lvl = request.form.get("education")
        yoe = request.form.get("experience")
        job_role = request.form.get("job-role")
        job_title = request.form.get("job-title")
        mongo1.db.applicants.insert_one({"email": email, "age": age, "gender": gender, "education": ed_lvl, "yoe": yoe,
                                         "Job_Role": job_role, "Job_Title": job_title})

        print("Data inserted successfully!")
        return redirect(url_for("home_page"))
    else:
        print("i not am here")
        return render_template("salary_predictor.html")

@app.route("/admin", methods = ["POST", "GET"])
def admin():
    if session.get('is_admin'):
        return render_template("admin.html")
    else:
        flash("YOU ARE NOT ADMIN", "error")
        return redirect(request.referrer)

@app.route("/add_remove",methods = ["POST", "GET"])
def add_remove():
    users = mongo1.db.applicants.find({})
    for user in users:
        
    return render_template("add_remove.html")

if __name__ == "__main__":
    app.run(debug=True)
