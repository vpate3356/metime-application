# in terminal
# pip install googlemaps
# pip install prettyprint

import googlemaps
import pprint
import time 
import json
import pymongo

 # required for connecting with SRV
client = pymongo.MongoClient("mongodb+srv://vrajp00:bapa3356@userdata.3nomaqv.mongodb.net/?retryWrites=true&w=majority")
# Access UserData.Account database on mongodb atlas 
db = client['UserData']
collection = db['PlacesNearby']
#define gmaps API key   -- my project key 
API_KEY= "AIzaSyBdqRy6zIcskbk59IvAO11cTzDVfI8itaQ"

#Define Client
gmaps = googlemaps.Client(key = API_KEY)            #aunthetic yourself 

#define our search 
places_result = gmaps.places_nearby(location = '33.979120,-117.341070', radius = 10000, open_now = True, type = 'art_gallery' ) 
#grandmarc with .2 raduis  --> raduis is measured meters 
#  can ADD all kinds of filters from here :https://developers.google.com/maps/documentation/places/web-service/search-nearby
# only one type parameter from = https://developers.google.com/maps/documentation/places/web-service/supported_types


# pprint.pprint(places_result)     Prints all results 

for place in places_result['results']:            # loop through all results to get more details
    #define place_id & fields (2 parameters for using Places Deatils)
    my_place_id = place['place_id']
    my_fields = ['name', 'formatted_address', 'type', 'business_status']
     # we can add More fields later from BELOW: but they cost
     # can add opening_hours, formatted_phone_number,current_opening_hours, website for $.003 per request
     # add price_level and more details for .005 

     # Make a Request for these details of the things around us
    place_details = gmaps.place(place_id = my_place_id, fields = my_fields)

    # add only wanted results 
    # Extract required fields
    result = place_details['result']
    status = result['business_status']
    formatted_address = result['formatted_address']
    name = result['name']
    types = result['types']


    # Create new dictionary with only required fields
    place_info = {
    'name': name,
    'formatted_address': formatted_address,
    'status' : status,
    'types': types
}   
    # print results 
    pprint.pprint(place_info)

    # writes ONLY 1 PLACE to be put on to json
    with open('output.json', 'w') as f:
        json.dump(place_info, f)
 
    collection.insert_one(place_info)
    #  writes ALL places details to file 
    # with open('output.json', 'a') as f:
    #     f.write(json.dumps(place_details) + '\n')