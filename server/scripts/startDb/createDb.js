const mongoose = require('./libs/mongoose');
const Promise = require('bluebird');
const startDaysData = require('./startDb/startDaysData');
const startMarks = require('./startDb/startMarks');


function createMarks(){
	return Promise.each(startMarks, (item) => {
		const saveMark = new mongoose.models.Mark(item);
		return saveMark.save();
	});
}

function open(){
	return new Promise((resolve) => {
		mongoose.connection.on('open', resolve);
	});
}

function requireModels(){
	require('./models/Day');
	require('./models/Mark');
	return Promise.each(Object.keys(mongoose.models), (modelName) =>{
		return mongoose.models[modelName].ensureIndexes();
	});
}

function dropDb() {
	const db = mongoose.connection.db;
	return new Promise((resolve) => db.dropDatabase(resolve));
}

function createDays(marks){

	return Promise.each(startDaysData, (day) => {
		day.items.map((cat) => {
			cat.defaultItem = marks.some((item) => item.title == cat.title && item.defaultItem);
		});
		const saveDay = new mongoose.models.Day(day);
		return saveDay.save();
	});
}

open()
	.then(dropDb)
	.then(requireModels)
	.then(createMarks)
	.then(createDays)
	.then(() => mongoose.disconnect())
	.catch(err => console.log(err));