var express = require('express');
var app = express();

app.get('/', function(req, res){
  let subdomains = req.subdomains;
  let finalString = "<p>";
  for(let i = 1; i < subdomains.length; i ++) {
    if(finalString != "<p>") {
      finalString += " & ";
    }
    finalString += subdomains[i];
  }
  finalString += "...<br/>Hardly know er!</p>";
  res.send(finalString);
});

app.listen(8080, '142.93.10.187');
