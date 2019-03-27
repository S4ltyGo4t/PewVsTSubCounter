var http = require('http');
let _host = "https://www.googleapis.com"
let _part = "statistics";
let _id = "UC-lHJZR3Gqxm24_Vd_AJ5Yw";
let _key = "AIzaSyD6Dq71z17NupL7_c4zjYPOul64itj3lIQ";
let _pathString = `/youtube/v3/channels?part=${_part}&id=${_id}&key=${_key}`;
//_host = "www.google.com";
//_pathString = "/index.html";

var options = {
    host: _host,
    path: _pathString
};

console.log("https://www.googleapis.com" + _pathString);

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.end();