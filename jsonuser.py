import json
import re
regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'   # used for email validation

def user_creation(userInfo): 
    while True:                                                    #email validation 
        email1 = input("Enter your email: \n")
        if( re.fullmatch(regex, email1)):
            print("Valid Email")
            break
        else: print("Invalid Email, Try again ")

    while True:
        if email1 in userInfo:
            print("That email is already tied into an account. \n")     # checks if account already exists 
            print("Try another email address \n")
        else: 
            userInfo.update({"email": email1})
            user1 = input("Enter your username: \n")
            userInfo.update({"ID": user1})
            password1 = input("Enter your password: \n")
            userInfo.update({"password": password1})
            interest1 = input("Out of Music, Entertainment,and Sports Please select your 1ST favorite activity: \n")
            userInfo.update({"interest1": interest1})
            interest2 = input("Out of Music,Entertainment,and Sports Please select your 2ND favorite activity: \n")
            userInfo.update({"interest2": interest2})
            interest3 = input("Out of Music,Entertainment,and Sports Please select your 3RD favorite activity: \n")
            userInfo.update({"interest3": interest3})
            write_to_users(userInfo)
            break


def write_to_users(userInfo):
    try:
        print(userInfo)
        with open("users.json", 'a') as outfile:
            json.dump(userInfo, outfile, indent=2)
    except IOError:
        print("I/O error")
 
userInfo = dict({"email": "Email", "ID": "User", "password": "Password", "interest1": "INT1", "interest2": "INT2", "interest3": "INT3" })
for i in range(2):  
    user_creation(userInfo)