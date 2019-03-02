// Represent a session
/*
    Consists of:
        - The date of the session
        - A sessionExercise array
*/

const fs = require('fs');
const path = require('path');
const utility = require('../util/utlility')
 
// Create the directory path where we want to save the file here.
const filePath = path.join(path.dirname(process.mainModule.filename), 
    'data',
    'sessions.json'
);

// This helper function reads the contents of the templates data. Takes a cb (callback function) and runs it according to the contents of the file
// If empty, run it with an empty array.
// Otherwise, parse the contents into an array (from JSON format) and pass it into the cb
const readSessionExerciseFromFile = cb => {
    fs.readFile(filePath, (err, fileContent) => {
        // if the file is empty, we pass the cb with an empty array and execute it.
        if (err) {
            return cb([]);
        }
        // else, parse the file's contents
        cb(JSON.parse(fileContent));
    });

}

module.exports = class Session {
    constructor(date, sessionExercises){
        this.date = date;
        // sessionExercises MUST be an array, this is an array of exercise names with its details.
        this.sessionExercises = sessionExercises;
    }

    save(){
        // Now, we read the files, and execute this cb function
        readSessionExerciseFromFile(temp1 => {
            // now we want to create a new session object here, and write it to the session.json file
            // also, we want to delete the duringSession.json file.
            fs.writeFile(filePath, JSON.stringify(temp1), (err) => {
                if (err){
                    console.log('Encountered error while saving session: ' + err);
                }
            });
        });
    }

    static fetchAll(cb) {
        readTemplatesFromFile(cb);
    }

}