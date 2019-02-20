/*
    - Exercise name
        - sessionExerciseDetails
*/

module.exports = class sessionExercise{
    constructor(exerciseName, exerciseDetail){
        this.exerciseName = exerciseName;
        // exerciseDetail MUST be an array that contains ALL sets performed
        this.exerciseDetail = exerciseDetail;
    }
}