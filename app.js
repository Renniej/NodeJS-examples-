var express = require('express');
var bodyParser = require('body-parser');
var app = express(); //returns methods/functions from the express module;


var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs'); //sets template(view) engine 

/*HTTP verbs

 -GET
 -POST
 -DELETE
 -PUT

*/


//Middleware = code that runs between request and response

app.use('/assets', express.static('assets')); //maps route to folder (how to serve up static files)

app.get('/', function(req, res){ //static route


    res.render('index');

});

app.post('/contact',urlencodedParser, function(req, res){ //static route

    console.log(req.body); //urlencodedParser gave us the body properity
    res.render('contact-success', {data : req.body});

});


app.get('/contact', function(req, res){ //static route

    console.log(req.query);
    res.render('contact', {qs : req.query});

});


app.get('/profile/:name' ,function(req,res){ //dynamic 


    var data = {age : 19, job: 'Unemployed' , hobbies : ['staying alive', 'not dying', 'rocket league', 'More staying alive...', 'Coding']};

    //res.send('You reguest to see a profile with the id of ' + req.params.id);
    res.render('profile', {person: req.params.name, data : data});

});


app.listen(3000);

