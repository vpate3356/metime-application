import pymongo
import re
regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'   # used for email validation
 # required for connecting with SRV
client = pymongo.MongoClient("mongodb+srv://vrajp00:bapa3356@userdata.3nomaqv.mongodb.net/?retryWrites=true&w=majority")

# Access UserData.Account database on mongodb atlas 
db = client['UserData']
collection = db['AccountInfo']


# email function check 
def check_email(email):
    # Search for the email in the collection
    result = collection.find_one({"email": email})
    # Return True if the email exists, False otherwise
    return True if result else False


def createUser():
    firstname = input("Please enter first name: \n")
    lastname = input("Please enter last name: \n")
    while True:                                                    #email validation 
        email = input("Enter your email: \n")
        if re.fullmatch(regex, email) and not check_email(email):
            print("Valid Email")
            print("Welcome with your new account")
            break
        elif check_email(email):
            print("Email:"+ email+ " is already registered")
            print("Please use another email")
        else: print("Invalid Email. Please try again ")
    password = input("Enter password: ")

    user = {
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "password": password,
    }
    # Insert the user information into the collection
    collection.insert_one(user)

createUser()
