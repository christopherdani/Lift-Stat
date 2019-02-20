// Represent a session
/*
    Consists of:
        - The date of the session
        - A sessionExercise array
*/

module.exports = class Session {
    constructor(date, sessionExercises){
        this.date = date;
        // sessionExercises MUST be an array, this is an array of exercise names with its details.
        this.sessionExercises = sessionExercises;
    }
}