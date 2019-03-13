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

// Open a file and parse it, create it if it doesn not exist.
exports.readFile = (filePath, cb) => {
    fs.readFile(filePath, (err, fileContent) => {
        // if the file is empty, we pass the cb with an empty array and execute it.
        if (err) {
            console.log('Error while reading' + filePath + ', using empty array...');
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


