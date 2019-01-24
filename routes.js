const url = require('url');
const fs = require('fs');

function renderHTML(path, res){
    fs.readFile(path, null, (error, data) => {
        if (error){
            res.writeHead(404);
            res.write('File not found');
        }
        else {
            res.write(data);
        }
        res.end();
    });
}

module.exports = {
    handleReq: (req, res) => {
        console.log("test");
        res.writeHead(200, {'Content-Type' : 'text/html'});
        const path = url.parse(req.url).pathname;
        switch (path) {
            case '/':
                renderHTML('./index.html', res);
                break;
            case '/template':
                renderHTML('./template.html', res);
                break;
            case '/lift':
                renderHTML('./lift.html', res);
                break;
            default:
                res.writeHead(404);
                res.write('Route not defined');
                res.end();
        }
    }
}