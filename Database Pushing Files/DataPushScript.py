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

# Autheticating the program to make changes to the database
cred = credentials.Certificate("sqn-981ba-firebase-adminsdk-bxk00-7dbb85d81f.json")
firebase_admin.initialize_app(cred, {'databaseURL' : 'https://sqn-981ba.firebaseio.com'})

def clear(): # This method resets the database
    ref = db.reference('/Data') # Get the database reference
    users_ref = ref.child('Person') # Create the table
    users_ref.set({ # Populate the table with a key and fields under key
        'PMKeys': {
            'Name': ' ',
            'RoleID': ' '
            }
        })
    # Rest of this method follows the above format for each table
    ref = db.reference('/Data')
    users_ref = ref.child('Currency')
    users_ref.set({
        'CurrencyID': {
            'CurrencyName': ' ',
            'Period': ' '
            }
        })
    ref = db.reference('/Data')
    users_ref = ref.child('CurrencyRole')
    users_ref.set({
        'CurrencyID': {
            'RoleID': ' ' 
            }
        })
    ref = db.reference('/Data')
    users_ref = ref.child('Flight')
    users_ref.set({
        'FlightID': {
            'DTG': ' ',
            'Landing': ' ',
            'Platform': ' ',
            'Takeoff': ' '
            }
        })
    ref = db.reference('/Data')
    users_ref = ref.child('PersonCurrency')
    users_ref.set({
        'PersonID': {
            'CurrencyID': ' ',
            'AchievementDate': ' '
            }
        })
    ref = db.reference('/Data')
    users_ref = ref.child('PersonFlight')
    users_ref.set({
        'FlightID': {
            'PersonID': ' ',
            'RoleID': ' '
            }
        })
    ref = db.reference('/Data')
    users_ref = ref.child('Role')
    users_ref.set({
        'RoleID': {
            'RoleName': ' '
            }
        })

def loadPersonData(): # This method loads all the data into the Person table from the created JSON
    stopper = False # Used to halt the while loop once there are no more entries in the JSON
    startPoint = 0 # Used to iterate through the JSON file
    with open("PersonsTable.json") as json_file: # Open and load the JSON
        json_data = json.load(json_file)
    while(stopper == False):
        try:
            pmkeys = (json_data["xml"]["items"]["item"][startPoint]["pmkeys"]) # Storing the data within the JSON file
            name = (json_data["xml"]["items"]["item"][startPoint]["name"])
            role = (json_data["xml"]["items"]["item"][startPoint]["role"])

            ref = db.reference('/Data/Person') # Creating the database reference
            posts_ref = ref.child(pmkeys) # Creating a new entry within the Persons table with the Key of PMKeys   
            posts_ref.set({ # Adding a name and role to the PMKeys reference
                'Name' : name,
                'id(Role)' : role
                })

            startPoint = startPoint + 1 # Used to iterate through the JSON
        except IndexError: # This error is thrown upon reaching the end of the JSON
            print("---------------------------------------")
            print("------------END OF JSON----------------")
            stopper = True # Ends the while loop

def loadCurrencyData(): # This method works identically as the loadPersonData() method however loads currency data
    stopper = False
    startPoint = 0
    with open("CurrencyTable.json") as json_file:
        json_data = json.load(json_file)
    while(stopper == False):
        try:
            currencyID = (json_data["xml"]["items"]["item"][startPoint]["id"])
            currencyName = (json_data["xml"]["items"]["item"][startPoint]["currency"])
            period = (json_data["xml"]["items"]["item"][startPoint]["period"])

            ref = db.reference('/Data/Currency')
            posts_ref = ref.child(currencyID)
            posts_ref.set({
                'CurrencyName' : currencyName,
                'Period' : period
                })

            startPoint = startPoint + 1
        except IndexError:
            print("---------------------------------------")
            print("------------END OF JSON----------------")
            stopper = True

def main(): # Main method for controlling the program
    print("Program for loading data into the firebase database")
    print("Please select from the below options")
    print("1) Clear Tables")
    print("2) Load the Persons Table")
    print("3) Load the Currency Table")
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
    else:
        print("Not a valid option")
        main()


if __name__ == '__main__':
        main()
