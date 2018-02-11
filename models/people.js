var mongoose = require('mongoose');

// Hair Colour schema

var peopleSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var People = module.exports = mongoose.model('People', peopleSchema, 'people');


// Get people


module.exports.getpeople = function(callback, limit){
	People.find(callback).limit(limit);
}

// Get one person

module.exports.getpersonById = function(id, callback){
	People.findById(id, callback);
}