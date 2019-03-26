/*
    This model should contain the user's PRs on a given exercise.
    Maybe also the last performed set's weights?
*/
const ExerciseDetail = require('../models/sessionExerciseDetail');
const Utility = require('../util/utlility');


module.exports = class userStats{

    constructor(exerciseName, set, weight, rep){
        this.exerciseName = exerciseName;
        this.detail = new ExerciseDetail(set, weight, rep);
    }

    // Updates the PR of a given exercise with its corresponding weight and reps
    // Create a new entry if an exercise hasn't been performed.
    static update(exerciseName, set, weight, rep){
        Utility.readFile(Utility.prFilePath, data => {
            var arr = Object.entries(data);
            var flag = false;
            for (var i = 0; i < arr.length; i++){
                // If the same exercise has been found, check what's different:
                if (arr[i][1].exerciseName == exerciseName){
                    arr[i][1].detail = new ExerciseDetail(set, weight, rep);
                    flag = true;
                    // If only the weight changed, just update that entry
                    // If the set changed, but weight and reps changed, should create a new entry IF there is no entry for that already.
                    // This is TODO later, since I'm only focused on 1 rep maxes right now.
                    break;
                }
            }
            // Not sure why this is nesting itself everytime I update... To figure out later...
            console.log(arr);
            if (flag){
                data.push(arr);
                Utility.writeToFile(Utility.prFilePath, data);
            }

            
        });
    }

    // Start tracking a new exercise's PRs
    track(){
        Utility.readFile(Utility.prFilePath, data => {
            Utility.writeToFile(Utility.prFilePath, this);
        });
    }

    // Fetches the given exercise's record. Return all PRs (all given sets, reps)
    static getPr(exerciseName, weight, set, rep){

    }

}