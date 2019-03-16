const fs = require('fs');
const path = require('path');

// File path to save a session
exports.sessionFilePath = path.join(path.dirname(process.mainModule.filename), 
    'data',
    'sessions.json'
);

// File path to session details.
exports.duringSessionFilePath = path.join(path.dirname(process.mainModule.filename), 
    'data',
    'duringSession.json'
);

// File path to user's pr
exports.prFilePath = path.join(path.dirname(process.mainModule.filename), 
    'data',
    'pr.json'
);

// Open a file and parse it, create it if it doesn not exist.
exports.readFile = (filePath, cb) => {
    fs.readFile(filePath, (err, fileContent) => {
        // if the file is empty, we pass the cb with an empty array and execute it.
        if (err) {
            console.log('Error while reading' + filePath + ', creating an empty file...');
            return cb([]);
        }
        // else, parse the file's contents
        cb(JSON.parse(fileContent));
    });
}

exports.deleteFile = (filePath) => {
    fs.unlink(filePath, rem => {
        console.log('Deleted duringSession.json');
    });
}

// content = Stringified data to write
exports.writeToFile = (filePath, content) => {
    fs.writeFile(filePath, content, (err) => {
        if (err){
            console.log('Encountered error while writing to file: ' + err);
            return;
        }
        console.log('Successfully written ' + content + ' to ' + filePath);
        return; 
    });
}

exports.todayDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
        
    if (mm < 10) {
        mm = '0' + mm;
    }  
    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

