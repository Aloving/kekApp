let express = require('express');
var _ = require('lodash');
let ObjectID = require('mongodb').ObjectID;
var router = express.Router();
var mongoose = require('../../libs/mongoose');
var moment = require('../../libs/moment');
var DaysData = require('../../models/Day').Day;
var HttpError = require('../../libs/error-handler').HttpError;
var MarksData = require('../../models/Mark').Mark;

var todayMonth = moment(new Date()).get('month');


/* GET days listing. */
router.get('/getdays/:cond/:id?', (req, res, next) => {

	var paramsCond = req.params.cond;
	var paramsId = req.params.id;
	var paramsUpdate = req.params.update;

	var dayUpdateParams = paramsUpdate ? {
		dayId: req.body.dayId,
		taskId: req.body.taskId,
		title: req.body.title,
		price: Number(req.body.price)
	} : false;

	if(paramsCond == 'index'){

		DaysData.find({}).sort({date: -1}).limit(7).exec((err, datadays) => {
			if (err) next(err);
			let days = datadays;
			MarksData.find({}).exec((err, marks) => {	
				if (err) next(err);
				days.map(function(day){
					day.items.map(function(item){
						item.defaultItem = marks.some(sItem => sItem.title == item.title && sItem.defaultItem);
					});
					return day;
				});
				res.json(days);
			});
		});

	}else if(paramsCond == 'calendar'){
		DaysData.aggregate([
			{
				'$match': {}
			},
			{
				$project: {
					_id: 1,
					date: 1,
				}
			}
		])
		.exec((err, datadays) => {

			if (err) next(err);
			var datadays = datadays.map(item => {
				let thisDate = item.date;
				item.date = {
					day: moment(thisDate).get('D'),
					month: moment(thisDate).get('month'),
					year: moment(thisDate).get('year')
				}
				return item;
			});

			res.json(datadays);

		});
	}else if(paramsCond == 'byid'){

		var arrayDay = [];
		DaysData.findById(paramsId, function(err, day){

			if (err) next(err);

			if (!day) {
				return next(new HttpError(404, 'Day not found'));
			}

			MarksData.find({}).exec((err, marks) => {
				if (err) next(err);
					day.items.map(function(item){
						item.defaultItem = marks.some(sItem => sItem.title == item.title && sItem.defaultItem);
						return item;
					});
					arrayDay.push(day);
				res.json(arrayDay);
			});
		
		});

	}
});

router.post('/updateday/:id/:remove?', (req, res, next) => {

	var updateInfo = {
		title: req.body.title,
		price: req.body.price,
		dayid: req.params.id,
		taskid: req.body.taskid
	}

	var remove = req.params.remove;

	if(remove){

		DaysData.update(
			{"_id": ObjectID(updateInfo.dayid)},
			{"$pull": 
				{"items": 
					{"_id": ObjectID(updateInfo.taskid)}
				}
			},{
				"upsert": false,
				"multi": false
			}, function(err, data){
				res.json(data);
			});

	} else {
		DaysData.update({"_id": ObjectID(updateInfo.dayid),
		 "items._id": ObjectID(updateInfo.taskid)},
		{"$set":{
			"items.$.price": updateInfo.price,
			"items.$.title": updateInfo.title
		 }},
		 function(err, data){
		 	if(err) {
		 		res.json({status: 'err'});
		 		next(err);
		 	}
		 	
		 	res.json(data);
		 	
		 });
	}


});

router.get('/getstatistic', (req, res, next) => {
	DaysData.aggregate([
			{
				'$match': {}
			},
			{
				$project: {
						date: 1,
						items: 1
				}
			},
			{
				$group: {
					_id : {
							month: { $month: '$date' },
							year: { $year: '$date' }
					},
					id: {$push: '$_id'},
				items: {$push: '$items'}
			}
		}
	]).exec((err, months) => {
		if(err) next(err);
		MarksData.find({}).exec((err, marks) => {
			if(err) next(err);
			data = months.reduce(function(prev, current){
				var currentCopy = {
					date: current._id,
					copyItems: current.items,
					items: [],
					_id: new ObjectID
				};

				currentCopy.copyItems.forEach(function(item){
					return item.forEach(function(item){
						currentCopy.items.push(item);
					});
				});

				currentCopy.items = currentCopy.items.reduce(function(prev, current){

					var haveInArray = prev.filter(item => item.title == current.title ? item : false);

					haveInArray.length || !haveInArray ? haveInArray[0].price += +current.price : prev.push(current);
					return prev;
				},[]);

				delete currentCopy.copyItems;
				prev.push(currentCopy);
				
				return prev;
			}, [])
			.map(function(month){
					month.items.map(function(item){
						item.defaultItem = marks.some(sItem => sItem.title == item.title && sItem.defaultItem);
					});
					return month;
				});

			res.json(data);
		});

	});
	
});

router.post('/updatelist/:id', (req, res, next) => {
	DaysData.findById(req.params.id, function(err, day){
		if (err) {
			next(err);
		}
		if (!day) {
			return next(new HttpError(404, 'Day not found'));
		}
		day.items.push({
			title: req.body.title,
			price: Number(req.body.price),
		});

		day.save((err, updatedDay) => {
			if(err) next(err);
			res.json({success: true});
		});
		
	});
});

router.get('/getmarks', (req, res, next) => {
	MarksData.find({}, (err, datamarks) => {
		if(err) return next(err);
		res.json(
			datamarks
				.filter(sortByMonth)
				.reduce(sortByDefault, {
					defaults: [],
					unDefaults: []
				})
			);
	});

	function sortByMonth(item){
		return item.defaultItem || moment(item.create, 'DD.MM.YYYY').get('month') == todayMonth;
	}

	function sortByDefault(prev, current){
		current.defaultItem ? prev.defaults.push(current) : prev.unDefaults.push(current);
		return prev;
	}

});

router.post('/addmark', (req, res, next) => {
	require ('../../models/Mark');

	MarksData.findOneAndUpdate(
		{title: req.body.title},
		{
			title: req.body.title,
			defaultItem: false,
			create: new Date()
		},
		{upsert: true,
			new: true
		},
		function(err, mark){
			console.log('err', err);
			console.log('mark', mark);
			if (err) next(err);
			res.json(mark);
	});

});

module.exports = router;
