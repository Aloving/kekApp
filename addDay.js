
function createDailtyItem(fromDate){
var mongoose = require('./libs/mongoose');

function open(){
	return new Promise((resolve, reject) => {
		mongoose.connection.on('open', resolve(fromDate));
	});
};

function createData(){
	require('./models/Day');
	var Day = new mongoose.models.Day({
		date: fromDate,
		items:[]
	});
	return Promise.all([
		Day.save()
	])
};
	open()
		.then(createData)
		.then(result => {
			console.log(result);
		})
		.catch(err => console.log(err))
		// .then(() => mongoose.disconnect());
}

module.exports = createDailtyItem;