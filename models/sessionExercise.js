/*
    - Exercise name
        - sessionExerciseDetails
*/
const fs = require('fs');
const path = require('path');
const utility = require('../util/utlility')
 
// Path to where we should save.
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
            console.log('Error while reading duringSession.json, creating an empty file...');
            return cb([]);
        }
        // else, parse the file's contents
        cb(JSON.parse(fileContent));
    });

}

const validateData = (exerciseName, exerciseDetails, cb) => {
    if (exerciseName == ''){
        return cb('exerciseName is undefined! This shouldn\'t happen');
    }
    else if (exerciseDetails.weightUsed == ''){
        return cb('You didn\'t enter a weight!');
    }
    else {
        return cb('Set data is good, saving now...');
    }
}

module.exports = class sessionExercise{
    
    constructor(exerciseName, exerciseDetail){
        this.exerciseName = exerciseName;
        this.exerciseDetail = exerciseDetail;
    }

    // cb to update the progress in the exercise
    // Function arguments to check if we need to edit a specific set, or add a new one.
    save(exerciseName, exerciseDetails){
        var validated = true;
        validateData(exerciseName, exerciseDetails, (result) => {
            console.log(result);
            if (result != 'Set data is good, saving now...'){
                validated = false;
            }
        });

        if (validated) {
            // Now, we read the files, and execute this cb function
            // Have to use => instead of function(){}. we prevent hoisting here, so "this" refers to the correct this.
            readSessionExerciseFromFile(temp1 => {
                // Check if the set has been saved yet, if so, then edit the set with the new exerciseDetail
                var flag = true;
                var arr = Object.entries(temp1);
                for (var i = 0; i < arr.length; i++){
                    if (arr[i][1].exerciseName == exerciseName && arr[i][1].exerciseDetail.setNumber == exerciseDetails.setNumber){
                        arr[i][1].exerciseDetail = exerciseDetails;
                        flag = false;
                        break;
                    }
                }
                if (flag){
                    temp1.push(this);
                }           
                // Rewrite the file here.
                fs.writeFile(filePath, JSON.stringify(temp1), (err) => {
                    if (err){
                        console.log('Encountered error while saving set: ' + err);
                    }
                });
            });
        }
    }

    // Fetch the content of a given 
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

    // Takes a callback function (cb). This function should render the templates that are read and returned to it from the files.
    static fetchAll(cb) {
        readSessionExerciseFromFile(cb);
    };

}