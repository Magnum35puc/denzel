'use strict';

//Modules
var mongoose  = require('mongoose');
//Schema
var Schema    = mongoose.Schema;
var movieSchema = new Schema({
	actorID: {type: String,required: true},	
	link: String,
	id: String,
	metascore: Number,
	poster: String,
	rating: Number,
	synopsis: String,
	title: String,
	votes: Number,
	year: Number,
}, { versionKey: false });


module.exports = mongoose.model('Movies', movieSchema);