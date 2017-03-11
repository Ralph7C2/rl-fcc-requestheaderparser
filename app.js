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
			console.log(req.headers['user-agent']);
			match = req.headers['user-agent'].match(/\(.*\) /);
			if(match) {
				console.log("------------------");
				console.log("Matched");
				console.log(match);
				console.log(match[0]);
				console.log("------------------");
				obj.software = match[0].trim().slice(1, match[0].length-2).trim();
			}
		}
	}
	res.json(obj);
});

port = process.env.PORT || 4040;

app.listen(port, function() {
	console.log("Ready to rock on port: "+port);
});