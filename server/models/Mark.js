var mongoose = require('../libs/mongoose');
var Schema = mongoose.Schema;
var moment = require('../libs/moment');

mongoose.set('debug', true);

var schema = new Schema({
	title: {
		type: String,
		unique: true,
		required: true
	},
	defaultItem: {
		type: Boolean,
		required: true
	},
	create: {
		type: Date,
		required: false,
		get: getFormatData
	}
},
	{
		toObject : {getters: true},
		toJSON : {getters: true}
	}
);

function setFormatData(date){
	return moment(date, 'DD.MM.YYYY').toISOString();
}

function getFormatData(date){
	return moment(date).format('DD.MM.YYYY');
}

exports.Mark = mongoose.model('Mark', schema);