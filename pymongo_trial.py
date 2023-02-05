import pymongo

 
# Provide the mongodb atlas url to connect python to mongodb using pymongo
#CONNECTION_STRING =  "mongodb+srv://vrajp00:bapa3356@metimeapp.kjhpdea.mongodb.net/?retryWrites=true&w=majority"
                   

# Connect to the MongoDB Atlas cluster
uri = "mongodb+srv://vrajp00:bapa3356@metimeapp.kjhpdea.mongodb.net/?retryWrites=true&w=majority"
client = pymongo.MongoClient(uri)

# Get the sample database
db = client.test

# Get the sample collection
#collection = db["sample_collection"]

# Check if the connection was successful
#f collection:
print("Connected to MongoDB Atlas successfully!")
#else:
#   print("Connection to MongoDB Atlas failed.")