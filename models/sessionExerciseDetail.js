/*
    - Set number
    - Weight used
    - Reps performed
*/
module.exports = class sessionExerciseDetail {
    constructor(setNumber, weightUsed, repsPerformed){
        this.weightUsed = weightUsed;
        this.setNumber = setNumber;
        this.repsPerformed = repsPerformed;
    }
}