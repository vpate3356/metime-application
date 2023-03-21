# in terminal
# pip install googlemaps
# pip install prettyprint
# pip install geopy

import googlemaps
import pprint
import time 

from geopy.geocoders import Nominatim

#define API key   -- my project key 
API_KEY= "AIzaSyBdqRy6zIcskbk59IvAO11cTzDVfI8itaQ"

#Define Client
gmaps = googlemaps.Client(key = API_KEY)            #aunthetic yourself 

# takes in user input for address and gets latitude/longitude, see below for what user should input
# United States, pass in the address components in the format {house number} {street} {city} {state} {zip}.
# For outside USA: {house number} {street} {city} {state} {zip} or follow local address formatting example below
# 123 Main St Swindon SN2 2DQ (UK)
# Fraunhoferstraße 6 80469 München Bavaria (Germany)
userInput = input() # example input: 3637 Canyon Crest Dr Riverside, CA 92507

geolocator = Nominatim(user_agent="my_request")
loc = geolocator.geocode(userInput)
print(loc.address)
print((loc.latitude, loc.longitude))
loc2 = str(loc.latitude)
loc2 += ','
loc2 += str(loc.longitude)

#define our search 
places_result = gmaps.places_nearby(location = loc2, radius = 10000, open_now = True, type = 'art_gallery' ) 
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
    # print results 
    pprint.pprint(place_details)