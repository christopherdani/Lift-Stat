// Represent an exercise, consists of the exercise name and its sets and reps

module.exports = class Exercise {
    constructor(exerciseName, set, rep){
        this.exerciseName = exerciseName;
        this.set = set;
        this.rep = rep;
    }
}