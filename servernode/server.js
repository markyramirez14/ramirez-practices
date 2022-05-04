// const http = require('http');
// const fs = require('fs')
// const _ = require('lodash');

// const writeStream = fs.createWriteStream('./docs/history.txt', { encoding: 'utf8'}); // to write text to a file

// const server = http.createServer((req, res) => {
//     // console.log(req.url, req.method);
//     //set header content type
//     res.setHeader('Content-Type', 'text/html');
    
//     let path = './views/';
//     switch(req.url){
//         case '/':
//             path += 'index.html';
//             res.statusCode = 200;
//             writeStream.write('\n<p>Visited Index Page</p>\n');
//             break;
//         case '/history':
//             path += 'history.html';
//             res.statusCode = 200;
//             writeStream.write('\n<p>Visited History Page</p>\n');
//             break;
//         case '/about':
//             path += 'about.html';
//             res.statusCode = 200;
//             writeStream.write('\n<p>Visited about Page</p>\n');
//             break;
//         case '/about-me':
//             res.statusCode = 301;
//             res.setHeader('Location','/about');
//             writeStream.write('\n<p>Visited about Page</p>\n');
//             res.end();
//             break;
//         case '/history-list':
//             path += '../docs/history.txt';
//             res.statusCode = 200;
//             break;
//         default:
//             path += '/404.html';
//             res.statusCode = 404;
//             writeStream.write('\n<p>Visited a missing page</p>\n');
//             break;
//     }

//     //send an html file
//     fs.readFile(path, (err, data) => {
//         if (err){
//             console.log(err);
//             res.end();
//         }else{
//             // res.write(data);
//             res.end(data);
//         }
//     })
    
// });

// server.listen(3010, 'localhost', () => {
//     console.log('listening for requests on port number 3005')
// });