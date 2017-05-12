var mongoose = require('../libs/mongoose'),
		Schema = mongoose.Schema;

		mongoose.set('debug', true);

var moment = require('../libs/moment');

var schema = new Schema({
	date: {
		type: Date,
		default: Date.now,
		unique: true,
		get: getFormatData
		// set: setFormatData
	},
	items: [
		{
			title: String,
			price: Number
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
	return moment(date).format('DD.MM.[2к]YY');
}

exports.Day = mongoose.model('Day', schema);