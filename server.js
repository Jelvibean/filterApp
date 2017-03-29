// include modules
var express = require('express'),
    app = express(),
    path = require('path');

 //path.join twos directory together outcomes to :  c:/XXX/learn-grunt/dist 
 // express.static just sets that string to know this is your static path.
 //app.use -  come back to.
app.use(express.static(path.join(__dirname,'dist')));


// setup server
app.listen(3000);
