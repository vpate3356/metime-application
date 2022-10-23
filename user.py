## To be implemented: create user (ID, email, password) and add info to users.csv
## Starting questionaire, record user answers into users.csv

import csv

def user_creation(userInfo):
    
    email1 = input("Enter your email: \n")
    if email1 in userInfo:
        print("That email is already tied into an account. \n")
        return None
    else: 
        #userInfo["email"] = email
        #userInfo["ID"] = user
        userInfo.update({"email": email1})
        user1 = input("Enter your username: \n")
        userInfo.update({"ID": user1})
        password1 = input("Enter your password: \n")
        userInfo.update({"password": password1})

    # writes to user.csv (to be implemented later)
    # with open('user.csv', 'w') as file:
    #    writer = csv.writer(file)
    #    writer.writerow(userInfo)

userInfo = dict({"email": "Email", "ID": "User", "password": "Password"})
userInfo = dict()
for i in range(3):  
    user_creation(userInfo)
