var mongoose = require('./libs/mongoose');
var Promise = require('bluebird');
var startDaysData = require('./startDb/startDaysData');
var startDefaultsMarks = require('./startDb/startDefaultsMarks');


function createMarks(){
	require('./models/Mark');
	return Promise.each(startDefaultsMarks, (item) => {
		var saveMark =  mongoose.models.Mark(item);
		return saveMark.save();
	});
}

function open(){
	return new Promise((resolve, reject) => {
		mongoose.connection.on('open', resolve);
	});
}

function dropDb() {
	var db = mongoose.connection.db;
	return new Promise((resolve, reject) => db.dropDatabase(resolve));
}

function createDays(marks){
	require('./models/Day');
	return Promise.each(startDaysData, (day) => {
		day.items.map((cat) => {
			cat.defaultItem = marks.some((item) => item.title == cat.title);
		});
		var saveDay = new mongoose.models.Day(day);
		return saveDay.save();
	});
}

open()
	.then(dropDb)
	.then(createMarks)
	.then(createDays)
	.then(() => mongoose.disconnect())
	.catch(err => console.log(err));