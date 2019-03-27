var http = require('http');
let _part = "statistics";
let _id = "UC-lHJZR3Gqxm24_Vd_AJ5Yw";
let _key = "AIzaSyD6Dq71z17NupL7_c4zjYPOul64itj3lIQ";
let pathString = `/youtube/v3/channels?part=${_part}&id=${_id}&key=${_key}`
var options = {
    host: 'https://www.googleapis.com',
    path: pathString
};

var req = http.get(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));

    // Buffer the body entirely for processing as a whole.
    var bodyChunks = [];
    res.on('data', function (chunk) {
        // You can process streamed parts here...
        bodyChunks.push(chunk);
    }).on('end', function () {
        var body = Buffer.concat(bodyChunks);
        console.log('BODY: ' + body);
        // ...and/or process the entire body here.
    })
});

req.on('error', function (e) {
    console.log('ERROR: ' + e.message);
});