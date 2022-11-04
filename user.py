## create user (ID, email, password) and add info to users.csv
## Starting questionaire, record user answers into users.csv

import csv
import re

regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'   # used for email validation

def user_creation(userInfo): 
    while True:                                                    #email validation 
        email1 = input("Enter your email: \n")
        if( re.fullmatch(regex, email1)):
            print("Valid Email")
            break
        else: print("Invalid Email, Try again ")

    if email1 in userInfo:
        print("That email is already tied into an account. \n")     # checks if account already exists 
        return None
    else: 
        userInfo.update({"email": email1})
        user1 = input("Enter your username: \n")
        userInfo.update({"ID": user1})
        password1 = input("Enter your password: \n")
        userInfo.update({"password": password1})
        print(userInfo)
        write_to_users(userInfo)
    # writes to user.csv (to be implemented later)
    # with open('user.csv', 'w') as file:
    #    writer = csv.writer(file)
    #    writer.writerow(userInfo)


    



def write_to_users(userInfo):
    field_names = ['email', 'ID', 'password']
    csvf = "users.csv"
    try:
        with open(csvf, 'wb') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=field_names)
            #writer.writeheader()
            for data in userInfo:
                writer.writerow(data)
    except IOError:
        print("I/O error")
 
 
 
#    with open("users.csv", 'w', newline='') as csvfile:
#        #writer = csv.Dictwriter(csvfile, fieldnames = field_names)
#        field_names = ['Email', 'User', 'Password']
#        writer = csv.Dictwriter(csvfile, fieldnames= field_names)
#        #writer.writeheader()
#        writer.writerow(userInfo)
#        file.close()


# initializes userInfo and creates userInfo
userInfo = dict({"email": "Email", "ID": "User", "password": "Password"})
for i in range(3):  
    user_creation(userInfo)
