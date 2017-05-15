var mongoose = require('../libs/mongoose'),
		Schema = mongoose.Schema;

		mongoose.set('debug', true);

var schema = new Schema({
	title: {
		type: String,
		unique: true
	},
	defaultItem: Boolean
});

exports.Mark = mongoose.model('Mark', schema);