// Represent a session
/*
    Consists of:
        - The date of the session
        - A sessionExercise array
*/

const fs = require('fs');
const Utility = require('../util/utlility')

const readSessionExerciseFromFile = cb => {
    fs.readFile(Utility.duringSessionFilePath, (err, fileContent) => {
        // if the file is empty, we pass the cb with an empty array and execute it.
        if (err) {
            console.log('Error while reading duringSessionFilePath in session.js, using empty array...');
            return cb([]);
        }
        // else, parse the file's contents
        cb(JSON.parse(fileContent));
    });
}

const readSessionFromFile = cb => {
    fs.readFile(Utility.sessionFilePath, (err, fileContent) => {
        // if the file is empty, we pass the cb with an empty array and execute it.
        if (err) {
            console.log('Error while reading sessionFilePath in session.js, using empty array...');
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

    static save(date){
        // Now, we read the files, and execute this cb function
        readSessionExerciseFromFile(temp1 => {
            // If the date is placeholder, that means user has skipped the date entry part, replace that with today's date
            if (date == 'placeholder'){
                console.log('User skipped home page, using today\'s date as default');
                date = Utility.todayDate();
            }

            // now we want to create a new session object here, and write it to the session.json file
            var exercises = [];
            var arr = Object.entries(temp1);
            for (var i = 0; i < arr.length; i++){
                exercises.push(arr[i][1]);
            }
            var session = new Session(date, exercises); 

            readSessionFromFile(temp2 => {
                temp2.push(session);
                fs.writeFile(Utility.sessionFilePath, JSON.stringify(temp2), (err) => {
                    if (err){
                        console.log('Encountered error while saving session: ' + err);
                        return;
                    }
                });
            })
            
        });
    }

    static fetchAll(cb) {
        readSessionFromFile(cb);
    }

}