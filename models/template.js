// Represent a template, consists of a name, and an array of exercises.

const fs = require('fs');
const path = require('path');

// Create the directory path where we want to save the file here.
const filePath = path.join(path.dirname(process.mainModule.filename), 
    'data',
    'templates.json'
);

// This helper function reads the contents of the templates data. Takes a cb (callback function) and runs it according to the contents of the file
// If empty, run it with an empty array.
// Otherwise, parse the contents into an array (from JSON format) and pass it into the cb
const readTemplatesFromFile = cb => {
    fs.readFile(filePath, (err, fileContent) => {
        // if the file is empty, we pass the cb with an empty array and execute it.
        if (err) {
            return cb([]);
        }
        // else, parse the file's contents
        cb(JSON.parse(fileContent));
    });

}

module.exports = class Template {

    constructor(name, exerciseArray) {
        this.name = name;
        this.exercises = exerciseArray;
    }

    save() {
        // Now, we read the files, and execute this cb function
        readTemplatesFromFile(temp1 => {
            // Have to use => instead of function(){}. we prevent hoisting here, so "this" refers to the correct this.
            // Append the new template to array here
            temp1.push(this);
            // Rewrite the file here.
            fs.writeFile(filePath, JSON.stringify(temp1), (err) => {
                if (err){
                    console.log(err);
                };
            });
        });
    };

    static fetchContent(name, cb) {
        fs.readFile(filePath, (err, fileContent) => {
            // if the file is empty, we pass the cb with an empty array and execute it.
            if (err) {
                return cb([]);
            }
            // else, get the template with the correct name, and run cb with it.
            var templateArray = JSON.parse(fileContent);
            for (var key in templateArray){
                //console.log(name);
                //console.log(templateArray[key].name);
                if (templateArray[key].name == name){
                    
                    return cb(templateArray[key]);
                }
            }
            return cb([]);
        });
    }
    
    // Takes a callback function (cb). This function should render the templates that are read and returned to it from the files.
    static fetchAll(cb) {
        readTemplatesFromFile(cb);
    };
};