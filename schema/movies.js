const mongo = require('mongoose')

const schema = mongo.Schema({
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
});


module.exports = mongoose.model('Movie', schema);
