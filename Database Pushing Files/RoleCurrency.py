# Import JSON module
import json
# Import Firebase Tools
import firebase_admin
# Import credential module
from firebase_admin import credentials
# Import database module
from firebase_admin import db
# Import printing tools
from pprint import pprint
import math

# Autheticating the program to make changes to the database
cred = credentials.Certificate("sqn-981ba-firebase-adminsdk-bxk00-7dbb85d81f.json")
firebase_admin.initialize_app(cred, {'databaseURL' : 'https://sqn-981ba.firebaseio.com'})

ref = db.reference('/Data/PersonCurrency')
ref.push({
  'AchievementDate' : '13-10-2017T11:28',
  'CurrencyID' : '-KwDIsm0Z7iPmPuVS9TW',
  'PersonID' : '-KwDIn0JySVlC3xFCjw5'
  })

