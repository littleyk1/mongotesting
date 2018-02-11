var mongoose = require('mongoose');

// Hair Colour schema

var hairColourSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var HairColour = module.exports = mongoose.model('HairColour', hairColourSchema, 'hairColour');


// Get hair colours


module.exports.gethairColours = function(callback, limit){
	HairColour.find(callback).limit(limit);
}

//Create New hair colour

module.exports.addHairColours = function(hairColour, callback){
	HairColour.create(hairColour, callback);
}