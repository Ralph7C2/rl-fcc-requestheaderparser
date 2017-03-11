const express = require('express');
var app = express();

app.get('/', function(req, res) {
	var obj = {};
	obj.ipaddress = req.ip;
	if(req.headers) {
		if(req.headers['accept-language']) {
			obj.language = req.headers['accept-language'].split(',')[0];
		}
		if(req.headers['user-agent']) {
			obj.software = req.headers['user-agent'].match(/\(.*\) /).toString().trim().match(/\(.*\) /).toString().trim();
		}
	}
	res.json(obj);
});

port = process.env.PORT || 4040;

app.listen(port, function() {
	console.log("Ready to rock on port: "+port);
});