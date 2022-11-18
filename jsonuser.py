import json
import re
regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'   # used for email validation

def user_creation(userInfo): 
    sp = 0
    art = 0
    ent = 0 
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
            inputVal = input("Do you like sports Y/N?: \n")
            if inputVal == "Y" or inputVal == "y":
                sp = sp + 1
            inputVal = input("Do you like art Y/N?: \n")
            if inputVal == "Y" or inputVal == "y":
                art = art + 1
            inputVal = input("Do you like entertainment Y/N?: \n")
            if inputVal == "Y" or inputVal == "y":
                ent = ent + 1    
            inputVal = input("What's your favorite category of the three? S/A/E: \n")
            if inputVal == "S" or inputVal == "s":
                sp = sp + 2
            elif inputVal == "A" or inputVal == "a":
                art = art + 2
            elif inputVal == "E" or inputVal == "e":
                ent = ent + 2
            inputVal = input("What's your 2nd favorite category of the three? S/A/E: \n")
            if inputVal == "S" or inputVal == "s":
                sp = sp + 1
            elif inputVal == "A" or inputVal == "a":
                art = art + 1
            elif inputVal == "E" or inputVal == "e":
                ent = ent + 1
            userInfo.update({"sportsInterest": sp})
            userInfo.update({"artInterest": art})
            userInfo.update({"entertainmentInterest": ent})
            print(userInfo)
            write_to_users(userInfo)
            break


def write_to_users(userInfo):
    try:
        print(userInfo)
        with open("users.json", 'a') as outfile:
            json.dump(userInfo, outfile, indent=2)
    except IOError:
        print("I/O error")
 


userInfo = dict({"email": "Email", "ID": "User", "password": "Password", "sportsInterest": 0, "artInterest": 0, "entertainmentInterest": 0})
for i in range(2):  
    user_creation(userInfo)