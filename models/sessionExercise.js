/*
    - Exercise name
        - sessionExerciseDetails
*/
const fs = require('fs');
const path = require('path');
const utility = require('../util/utlility')

// Create the directory path where we want to save the file here.
const filePath = path.join(path.dirname(process.mainModule.filename), 
    'data',
    'duringSession.json'
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

module.exports = class sessionExercise{
    
    constructor(exerciseName, exerciseDetail){
        this.exerciseName = exerciseName;
        this.exerciseDetail = exerciseDetail;
    }

    // cb to update the progress in the exercise
    save(){
        // Now, we read the files, and execute this cb function
        readSessionExerciseFromFile(temp1 => {
            // Have to use => instead of function(){}. we prevent hoisting here, so "this" refers to the correct this.
            // Append the new template to array here
            //console.log(utility.contains(temp1, 'setNumber', this.exerciseDetail.setNumber));

            temp1.push(this);
            
            
            console.log(temp1);
            // Rewrite the file here.
            fs.writeFile(filePath, JSON.stringify(temp1), (err) => {
                if (err){
                    console.log(err);
                }

            });
        });
    }

    editSet(exerciseDetail){
        this.exerciseDetail = exerciseDetail;
    }

    static fetchContent(cb) {
        fs.readFile(filePath, (err, fileContent) => {
            // if the file is empty, we pass the cb with an empty array and execute it.
            if (err) {
                return cb([]);
            }
            var tempArray = JSON.parse(fileContent);
            for (var key in tempArray){
                if (tempArray[key].name == name){
                    
                    return cb(tempArray[key]);
                }
            }
            return cb([]);
        });
    }

    static fetchAll(cb) {
        readTemplatesFromFile(cb);
    }
    
    removeSet(setNumber){
        
    }
}