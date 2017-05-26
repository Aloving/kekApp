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

	console.log(paramsCond, paramsId);
	if(paramsCond == 'index'){

		DaysData.find({}).sort({date: -1}).limit(7).exec((err, datadays) => {
			if (err) next(err);
			res.json(datadays);
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
		]).exec((err, datadays) => {
			if (err) next(err);
			res.json(datadays);
		});
	}else if(paramsCond == 'byid'){

		DaysData.findById(paramsId, function(err, day){
			if (err) {
				next(err);
			}
			if (!day) {
				return next(new HttpError(404, 'Day not found'));
			}

			res.json(day);
			
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
	]).exec((err, data) => {
		if(err) next(err);

		data = data.reduce(function(prev, current){
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

				var haveInArray = prev.filter(function(item){
					if(item.title == current.title){
						return item;
					}else{
						return false;
					}
				});

				haveInArray.length || !haveInArray ? haveInArray[0].price += +current.price : prev.push(current);
				return prev;
			},[]);

			delete currentCopy.copyItems;
			prev.push(currentCopy);
			
			return prev;
		}, []);

		res.json(data);
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
			console.log(updatedDay);
			if(err) next(err);
			res.json(updatedDay);
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
	
	MarksData.find({title: req.body.title}, (err, mark) => {
		if (err) return next(err);
		if(mark.length) res.json(mark);
		if(!mark.length){
			var addMark = new mongoose.models.Mark(req.body);
			addMark.save((err, addedMark) => {
				if(err) next(err);
				res.json(addedMark);
			});
		}

	});

});

module.exports = router;
