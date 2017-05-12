var mongoose = require('./libs/mongoose');

function open(){
	return new Promise((resolve, reject) => {
		mongoose.connection.on('open', resolve);
	});
}

function dropDb() {
	var db = mongoose.connection.db;
	return new Promise((resolve, reject) => db.dropDatabase(resolve));
}

function createData(){
	require('./models/Day');
	var Day = new mongoose.models.Day({
		date: '10.12.2017',
		items: [
			{
				title: 'Пивас',
				price: 500
			},
			{
				title: 'Пивас',
				price: 500
			}
		]
	});
	return Promise.all([
		Day.save()
	])
}

open()
	.then(dropDb)
	.then(createData)
	.then(result => {
		console.log(result);
	})
	.catch(err => console.log(err))
	.then(() => mongoose.disconnect());