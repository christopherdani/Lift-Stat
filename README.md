# Lift-Stat
Webapp to log your routine and visualize it.

## Dependencies
1) node.js and npm
Install by running:

`sudo apt-get install nodejs npm`

Install all dependencies by running:

`npm install`

Additional Info:

For now, nodemon needs to be installed globally. Since nodemon.json only works (at least as far as I can tell) when it's installed globally.

2) dbconfig.properties
Add your mongodb cluster connection url to the connect.url property and remove the .template extension.

## Running
Simply run `npm start`

## Implementation Notes:
Currently using .JSON files to save data. Will use a database in the future.

Deletes the temporary duringSession.JSON after the session is saved into session.JSON