var mongoose = require('../libs/mongoose');
var Schema = mongoose.Schema;
var moment = require('../libs/moment');

mongoose.set('debug', true);

var schema = new Schema({
	date: {
		type: Date,
		default: Date.now,
		unique: true,
		required: true,
		get: getFormatData,
		set: setFormatData
	},
	items: [
		{
			title: String,
			price: Number,
			defaultItem: Boolean
		}
	]
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

exports.Day = mongoose.model('Day', schema);