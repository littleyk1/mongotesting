var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

HairColour = require('./models/hairColour');
People = require('./models/people');

//connect to mongoose

mongoose.connect("mongodb://localhost/test");
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use something else');
});

app.get('/api/hairColour', function(req, res){
	HairColour.gethairColours(function(err, hairColour){
		if(err){
			throw err;
		}
		res.json(hairColour);
	});
});

app.post('/api/hairColour', function(req, res){
	var hairColour = req.body;
	HairColour.addHairColours(hairColour, function(err, hairColour){
		if(err){
			throw err;
		}
		res.json(hairColour);
	});
});

app.get('/api/people', function(req, res){
	People.getpeople(function(err, people){
		if(err){
			throw err;
		}
		res.json(people);
	});
});

app.get('/api/people/:_id', function(req, res){
	People.getpersonById(req.params._id, function(err, person){
		if(err){
			throw err;
		}
		res.json(person);
	});
});


app.listen(3100);
console.log('Running on port 3100...')