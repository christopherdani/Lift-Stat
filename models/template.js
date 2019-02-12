const fs = require('fs');
const path = require('path');

module.exports = class Template {
    constructor(name) {
        this.name = name;
    }

    save() {
        // Create the directory path where we want to save the file here.
        const filePath = path.join(path.dirname(process.mainModule.filename), 
        'data',
        'templates.json'
        );
        // Read the filePath directory here
        fs.readFile(filePath, (err, fileContent) => {
            // this anonymous function handles if we get an error(file doesn't exist), we create one.
            // fileContent is a buffer of the file's contents
            let temp1 = [];
            if (!err) {
                // !err returns true if err === null
                temp1 = JSON.parse(fileContent);
            }
            // Have to use => instead of function(){}. we prevent hoisting here, so "this" refers to the correct this.
            temp1.push(this);

            // Write to file here. This works, but it makes the server respond: "this site can't be reached"
            fs.writeFile(filePath, JSON.stringify(temp1), (err) => {
                if (err){
                    console.log(err);
                }
            });
        });
        
    }

    // Takes a callback function. This function should render the templates that are read from the files.
    static fetchAll(cb) {
        fs.readFile(p, (err, fileContent) => {
            if (err){
                console.log(err);
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
}