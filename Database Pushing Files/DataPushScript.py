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

cred = credentials.Certificate("sqn-981ba-firebase-adminsdk-bxk00-7dbb85d81f.json")
firebase_admin.initialize_app(cred, {'databaseURL' : 'https://sqn-981ba.firebaseio.com'})

def clear(): # Database Testing Service
# Get a database reference
    ref = db.reference('/0/Flights')
    users_ref = ref.child('Person')
    users_ref.set({
        'PMKeys': {
            'Name': ' ',
            'id(Role)': ' '
            }
        })
    ref = db.reference('/0/Flights')
    users_ref = ref.child('Currency')
    users_ref.set({
        'CurrencyID': {
            'CurrencyName': ' ',
            'Period': ' '
            }
        })

def loadPersonData():
    stopper = False
    startPoint = 0
    with open("PersonsTable.json") as json_file:
        json_data = json.load(json_file)
    while(stopper == False):
        try:
            pmkeys = (json_data["xml"]["items"]["item"][startPoint]["pmkeys"])
            name = (json_data["xml"]["items"]["item"][startPoint]["name"])
            role = (json_data["xml"]["items"]["item"][startPoint]["role"])

            ref = db.reference('/0/Flights/Person')
            posts_ref = ref.child(pmkeys)
            posts_ref.set({
                'Name' : name,
                'id(Role)' : role
                })

            startPoint = startPoint + 1
        except IndexError:
            print("---------------------------------------")
            print("------------END OF JSON----------------")
            stopper = True

def loadCurrencyData():
    stopper = False
    startPoint = 0
    with open("CurrencyTable.json") as json_file:
        json_data = json.load(json_file)
    while(stopper == False):
        try:
            currencyID = (json_data["xml"]["items"]["item"][startPoint]["id"])
            currencyName = (json_data["xml"]["items"]["item"][startPoint]["currency"])
            period = (json_data["xml"]["items"]["item"][startPoint]["period"])

            ref = db.reference('/0/Flights/Currency')
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
