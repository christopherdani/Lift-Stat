/*
    This model should contain the user's PRs on a given exercise.
    Maybe also the last performed set's weights?
*/

const Utility = require('../util/utlility');


module.exports = class userStats{

    constructor(exerciseName, weight, set, rep){
        this.exerciseName = exerciseName;
        this.detail = [weight, set, rep];
    }

    // Updates the PR of a given exercise with its corresponding weight and reps
    // Create a new entry if an exercise hasn't been performed.
    update(exerciseName, weight, rep){
        Utility.readFile(Utility.prFilePath, data => {
            var arr = Object.entries(data);
            for (var i = 0; i < arr.length; i++){
                if (arr[i][0] == exerciseName){
                    
                }
            }

            //Utility.writeToFile(Utility.prFilePath,)
        });
    }

    // Start tracking a new exercise's PRs
    track(){
        Utility.readFile(Utility.prFilePath, data => {
            Utility.writeToFile(Utility.prFilePath, JSON.stringify(this));
        });
    }

    // Fetches the given exercise's record. Return all PRs (all given sets, reps)
    static getPr(exerciseName, weight, set, rep){

    }

}