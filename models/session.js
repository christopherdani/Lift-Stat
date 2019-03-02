// Represent a session
/*
    Consists of:
        - The date of the session
        - A sessionExercise array
*/

const fs = require('fs');
const path = require('path');
const utility = require('../util/utlility')
 
// File path to save a session
const sessionFilePath = path.join(path.dirname(process.mainModule.filename), 
    'data',
    'sessions.json'
);

// File path to session details.
const duringSessionFilePath = path.join(path.dirname(process.mainModule.filename), 
    'data',
    'duringSession.json'
);


const readSessionExerciseFromFile = cb => {
    fs.readFile(duringSessionFilePath, (err, fileContent) => {
        // if the file is empty, we pass the cb with an empty array and execute it.
        if (err) {
            return cb([]);
        }
        // else, parse the file's contents
        cb(JSON.parse(fileContent));
    });
}

const readSessionFromFile = cb => {
    fs.readFile(sessionFilePath, (err, fileContent) => {
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

    static save(date){
        // Now, we read the files, and execute this cb function
        readSessionExerciseFromFile(temp1 => {
            // If the date is placeholder, that means user has skipped the date entry part, replace that with today's date
            if (date == 'placeholder'){
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1;
                var yyyy = today.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd;
                }
                    
                if (mm < 10) {
                    mm = '0' + mm;
                }  
                today = mm + '/' + dd + '/' + yyyy;
                date = today;
            }

            // now we want to create a new session object here, and write it to the session.json file
            // also, we want to delete the duringSession.json file.
            var exercises = [];
            var arr = Object.entries(temp1);
            for (var i = 0; i < arr.length; i++){
                exercises.push(arr[i][1]);
            }
            var session = new Session(date, exercises); 

            readSessionFromFile(temp2 => {
                temp2.push(session);
                fs.writeFile(sessionFilePath, JSON.stringify(temp2), (err) => {
                    if (err){
                        console.log('Encountered error while saving session: ' + err);
                        return;
                    }
                    fs.unlink(duringSessionFilePath, rem => {
                        console.log('Deleted duringSession.json');
                    })
                });
            })
            
        });
    }

    static fetchAll(cb) {
        readTemplatesFromFile(cb);
    }

}