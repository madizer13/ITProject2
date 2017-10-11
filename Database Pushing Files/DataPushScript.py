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

def clear(): # This method resets the database
    ref = db.reference('/Data') # Get the database reference
    users_ref = ref.child('Person') # Create the table
    users_ref.set({ # Populate the table with a key and fields under key
        'UUID': {
          'PersonID': ' ',
          'Name': ' ',
          'RoleID': ' '
            }
        })
    # Rest of this method follows the above format for each table
    ref = db.reference('/Data')
    users_ref = ref.child('Currency')
    users_ref.set({
        'UUID': {
            'CurrencyID': ' ',
            'CurrencyName': ' ',
            'Period': ' ',
            'RoleIDs': ' '
            }
        })
    ref = db.reference('/Data')
    users_ref = ref.child('CurrencyRole')
    users_ref.set({
        'UUID': {
            'RoleID': ' ',
            'CurrencyID': ' '
            }
        })
    ref = db.reference('/Data')
    users_ref = ref.child('Flight')
    users_ref.set({
        'UUID': {
            'DepartureDTG': ' ',
            'FlightID': ' ',
            'NightFlight': ' ',
            'VIP': ' ',
            'Platform': ' ', 
            'ArrivalAirport': ' ',  
            'DepartureAirport': ' ', 
            'ArrivalDTG': ' ', 
            'WeatherSummary' : ' '
            }
        })
    ref = db.reference('/Data')
    users_ref = ref.child('PersonCurrency')
    users_ref.set({
        'UUID': {
            'PersonID': ' ',
            'CurrencyID': ' ',
            'AchievementDate': ' '
            }
        })
    ref = db.reference('/Data')
    users_ref = ref.child('PilotFlight')
    users_ref.set({
        'UUID': {
            'PersonID': ' ',
            'RoleID': ' ',
            'FirstDay': ' ',
            'SecondDay': ' ',
            'FirstNight': ' ',
            'SecondNight': ' ',
            'DayLandings': ' ',
            'NightLandings': ' ',
            'FlightID': ' ',
            'ILS': ' ',
            'VOR': ' ',
            'NDB': ' ',
            'Circling': ' ',
            'NoSlope': ' '
            }
        })

    ref = db.reference('/Data')
    users_ref = ref.child('CrewFlight')
    users_ref.set({
      'UUID': {
        'FlightID': ' ',
        'RoleID': ' ',
        'Duration': ' '
        }
      })
    ref = db.reference('/Data')
    users_ref = ref.child('Role')
    users_ref.set({
        'UUID': {
            'RoleName': ' ',
            'RoleID': ' '
            }
        })

def loadPersonData(): # This method loads all the data into the Person table from the created JSON
    stopper = False # Used to halt the while loop once there are no more entries in the JSON
    startPoint = 0 # Used to iterate through the JSON file
    with open("PersonsTable.json") as json_file: # Open and load the JSON
        json_data = json.load(json_file)

    ref = db.reference('/Data/Person')      
    ref.delete()

    json_holder = json.dumps(json_data)
    item_dict = json.loads(json_holder)
    entries = len(item_dict["xml"]["items"]["item"])
    while(stopper == False):
        try:
            pmkeys = (json_data["xml"]["items"]["item"][startPoint]["pmkeys"]) # Storing the data within the JSON file
            name = (json_data["xml"]["items"]["item"][startPoint]["name"])
            role = (json_data["xml"]["items"]["item"][startPoint]["role"])

            ref.push({ # Adding a name and role to the PMKeys reference
                'Name' : name,
                'id(Role)' : role,
                'PersonID': pmkeys
                })       

            percentile = math.ceil(startPoint/entries * 100)
            print(("#" * percentile) + (" " * (100 - percentile)) + " " + str(percentile) +"% Completed", end='\r')
            startPoint = startPoint + 1 # Used to iterate through the JSON
        except IndexError: # This error is thrown upon reaching the end of the JSON
            print("\n---------------------------------------")
            print("------------END OF JSON----------------")
            stopper = True # Ends the while loop

def loadCurrencyData(): # This method works identically as the loadPersonData() method however loads currency data
    stopper = False
    startPoint = 0
    with open("CurrencyTable.json") as json_file:
        json_data = json.load(json_file)
    ref = db.reference('/Data/Currency')      
    ref.delete()

    json_holder = json.dumps(json_data)
    item_dict = json.loads(json_holder)
    entries = len(item_dict["xml"]["items"]["item"])
    while(stopper == False):
        try:
            currencyID = (json_data["xml"]["items"]["item"][startPoint]["id"])
            currencyName = (json_data["xml"]["items"]["item"][startPoint]["currency"])
            period = (json_data["xml"]["items"]["item"][startPoint]["period"])
            roleID = (json_data)["xml"]["items"]["item"][startPoint]["role"]

            ref.push({
                'CurrencyName' : currencyName,
                'CurrencyID' : currencyID,
                'Period' : period,
                'RoleIDs' : roleID 
                })
            percentile = math.ceil(startPoint/entries * 100)
            print(("#" * percentile) + (" " * (100 - percentile)) + " " + str(percentile) +"% Completed", end='\r')
            startPoint = startPoint + 1
 
        except IndexError:
            print("\n---------------------------------------")
            print("------------END OF JSON----------------")
            stopper = True

def loadRoleData(): # This method works identically as the loadPersonData() method however loads currency data
    stopper = False
    startPoint = 0
    with open("Roles.json") as json_file:
        json_data = json.load(json_file)
    ref = db.reference('/Data/Role')
    ref.delete()

    json_holder = json.dumps(json_data)
    item_dict = json.loads(json_holder)
    entries = len(item_dict["xml"]["items"]["item"])
    while(stopper == False):
        try:
            roleName = (json_data["xml"]["items"]["item"][startPoint]["roleName"])
            roleID = (json_data["xml"]["items"]["item"][startPoint]["roleID"])

            
            ref.push({
                'roleName' : roleName,
                'roleID' : roleID
                })

            percentile = math.ceil(startPoint/entries * 100)
            print(("#" * percentile) + (" " * (100 - percentile)) + " " + str(percentile) +"% Completed", end='\r')
            startPoint = startPoint + 1
        except IndexError:
            print("\n---------------------------------------")
            print("------------END OF JSON----------------")
            stopper = True

def main(): # Main method for controlling the program
    print("Program for loading data into the firebase database")
    print("Please select from the below options")
    print("1) Clear Tables")
    print("2) Load the Persons Table")
    print("3) Load the Currency Table")
    print("4) Load the Role Table")
    print("0) Quit")

    option = input('Option: ')

    if option == '0':
        print("Quitting")
        quit()
    elif option == '1':
        print("Clearing Tables")
        clear()
        main()
    elif option == '2':
        print("Loading the Persons Table")
        loadPersonData()
        main()
    elif option == '3':
        print("Loading the Currency Table")
        loadCurrencyData()
        main()
    elif option == '4':
        print("Loading the Role Table")
        loadRoleData()
        main()
    else:
        print("Not a valid option")
        main()


if __name__ == '__main__':
        main()
