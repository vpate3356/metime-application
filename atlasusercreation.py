from flask import Flask, request, redirect, session, render_template
import pymongo
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)

#connecting to Atlas DB
client = pymongo.MongoClient()#insert mongodb+srv:// link here
db = client['test']
collection = db['users']

@app.route("/")
def index():
    return render_template("index.html")

