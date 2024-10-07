////////////////////////////////////////////////////////////////////////////////
// let url = require('url');
// let adr = 'http://localhost:8000/default.html?year=2020&mouth=november';
// let q = url.parse(adr, true);
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);
// let qdata = q.query;
// console.log(qdata.year);
// console.log(qdata.mouth);

////////////////////////////////////////////////////////////////////////////////
// let fs = require('fs');
// let http = require('http');
// let url = require('url');
// http.createServer(function(req, res) {
//     let q = url.parse(req.url, true);
//     let filename = "." + q.pathname;
//     fs.readFile(filename, function(err, data) {
//         if(err){        
//         res.writeHead(400, {'Content-Type': 'text/html'});
//         return res.end('400 Not Found');

//         }
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(9000);

////////////////////////////////////////////////////////////////////////////
// let fs = require('fs');
//add new file that contain as Hello, World
// fs.appendFile('mynewfile.txt', 'Hello, World',function(err){
//     if(err) throw err;
//     console.log('Saved');
// })
//add new file that contain as null
// fs.open('mynewfile2.txt', 'w', function(err, file){
//     if(err) throw err;
//     console.log('Saved');
// })
//If file notfound it will addnew but haven't is will replace old file.
// fs.writeFile('mynewfile3.txt', 'This is replace new file 3', function(err){
//     if(err) throw err;
//     console.log('Saved!');
// })
// remove file
// fs.unlink('mynewfile3.txt', function(err){
//     if(err) throw err;
//     console.log('Saved');
// })
//rename 
// fs.rename('mynewfile.txt','myrenamefile.txt', function(err){
//     if(err) throw err;
//     console.log('Saved');
// })

////////////////////////////////////////////////////////////////////////
// import http from 'http';
// import fs from 'fs';
// import url from 'url';

// http.createServer(function(req, res) {
//     let q = url.parse(req.url, true);
//     let filename = "." + q.pathname;

//     // Default to index.html if root is requested
//     if (filename === './') {
//         filename = './index.html';
//     }

//     fs.readFile(filename, function(err, data) {
//         if (err) {
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             return res.end('404 Not Found');
//         }
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(9000, function() {
//     console.log('Server is running on port 9000');
// });

///////////////////////////////////////////////////////////
// import { upperCase } from 'upper-case';
// import http from 'http';
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(upperCase('titiporn sinpaksa'));
//     res.end();
// }).listen(9000);

//////////////////////////////////////////////////////////////
// import fs from 'fs';
// let rs = fs.createReadStream('./demo.txt');
// rs.on('open',function(){
//     console.log('The file is open');
// })

//////////////////////////////////////////////////////////////
// import events from 'events';
// let eventEmitter = new events.EventEmitter();

// let myEventHandler = function(){
//     console.log('I hear scream');
// }

// //Assign the event handler to an event:
// eventEmitter.on('scream',myEventHandler);
// //Fire the 'scream' event:
// eventEmitter.emit('scream')

///////////////////////////////////////////////////////////////
// import * as formidable from 'formidable';
// import http from 'http';
// import fs from 'fs';
// http.createServer(function(req,res){
//     if(req.url == '/fileupload'){
//         let form = new formidable.IncomingForm();
//         form.parse(req, function(err, fields, files){
//             let oldpath = files.fileupload.path;
//             let newpath = 'C:\Users\TitipornSinpaksa(Int\Desktop\Lerning\Code\nodeJS' + files.fileupload.name;
//             fs.rename(oldpath, newpath, function(err){
//                 if (err) throw err;
//                 res.write('File uploaed and moved')
//                 res.end();
//             })
//         })
//     }else{
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="file" name="fileuplaod"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//         return res.end();
//     }
// }).listen(9000);

/////////////////////////////////up load file//////////////////////////////////////////////
import * as formidable from 'formidable';
import http from 'http';
import fs from 'fs';
import path from 'path';  // Import path module

http.createServer(function (req, res) {
    if (req.url == '/fileupload' && req.method.toLowerCase() === 'post') {
        let form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            if (err) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Error parsing the file');
                return;
            }
            const file = Array.isArray(files.fileupload) ? files.fileupload[0] : files.fileupload;
            if (file && file.filepath) {
                let oldpath = file.filepath;
                let newpath = path.join('C:/Users/TITIPO~1/Desktop/Lerning/Code/nodeJS/img/', file.originalFilename);
                fs.rename(oldpath, newpath, function (err) {
                    if (err) {
                        console.error(err);
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Error moving the file');
                        return;
                    }
                    res.write('File uploaded and moved');
                    res.end();
                });
            } else {
                res.write('File upload failed: No valid file found.');
                res.end();
            }
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileupload"><br>');  // Ensure the name matches here
        res.write('<input type="submit">');
        res.write('</form>');
        res.end();
    }
}).listen(9000);




