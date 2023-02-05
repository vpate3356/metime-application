from flask import Flask, request, redirect, session, render_template
import pymongo
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)

#connecting to Atlas DB
client = pymongo.MongoClient(mongodb+srv://vrajp00:<password>@metimeapp.kjhpdea.mongodb.net/test)
db = client['test']
collection = db['users']

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/google_signin", methods=["POST"])
def google_signin():
    google_id = request.form["google_id"]
    name = request.form["name"]
    email = request.form["email"]
    #if user does not exist yet
    user = collection.find_one({"google_id": google_id})

    if not user:
        #Add user to the database
        user = {"google_id": google_id, "name": name, "email": email}
        collection