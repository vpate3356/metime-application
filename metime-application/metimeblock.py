from __future__ import print_function

import datetime
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

# If modifying these scopes, delete the file token.json.
#Deleting the file token.json to allow us to edit and not just readonly
SCOPES = ['https://www.googleapis.com/auth/calendar']

#https://developers.google.com/calendar/api/v3/reference/events/insert <-- use as reference

calendar_id = "c_5841ffe38a8e18611cca09d7770f8bc767ac0998b19dea4578e886972a0f40a2@group.calendar.google.com";
creds = None
service = build('calendar', 'v3', credentials=creds)

#dont need 'Z' or local/time offset for our events because we specify the timezone as America/Los Angeles
event = {
  'summary': 'MeTime Block #1',
  'location': '1600 Pennsylvania Avenue Northwest, Washington, DC',
  'description': 'This is your MeTime Block! Feel free to participate in today\'s activity to eliminate burnout and stress from your busy life. :)',
  'start': {
    'dateTime': '2022-12-31T09:00:00',
    'timeZone': 'America/Los_Angeles',
  },
  'end': {
    'dateTime': '2022-12-31T09:30:00',
    'timeZone': 'America/Los_Angeles',
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=1'
  ],
  'attendees': [
    {'email': 'skudt001@ucr.edu'},
    {'email': 'kchim003@ucr.edu'},
  ],
  'reminders': {
    'useDefault': False,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10},
    ],
  },
}

event = service.events().insert(calendarId=calendar_id, body=event).execute()
print("Event created:  %s" + event.get('htmlLink'))