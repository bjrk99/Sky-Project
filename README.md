PROJECT FOR CLIENT - Sky Betting & Gaming

DETAILS:
-Canvas Game with calls to mock API - JSONPLACEHOLDER (https://jsonplaceholder.typicode.com/)

REQUIREMENTS TO RUN:

-Download Windows Installer or macOS Installer from https://nodejs.org/en/download/

-Install Node.js

-Following instructions will be from https://github.com/typicode/json-server

-Install JSON-SERVER using cmd ---> npm install -g json-server

-Open cmd where is located db.json file from this project

-Type in cmd ---> json-server --watch db.json

-At this point JSON-SERVER will watch for any changes in json file

-Open index.html

-Open serverPage.html

-On server page you can turn on and off server (PUT request in db.json)

-Main gameplay every 3 seconds will make GET request using JSON-SERVER and check if db.json value has changed or not

-If value in db.json == false, then server is down

-Else if value in db.json == true, then server is up and running

