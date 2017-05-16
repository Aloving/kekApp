let express = require('express');
var router = express.Router();
var mongoose = require('../../libs/mongoose');
var moment = require('../../libs/moment');
var DaysData = require('../../models/Day').Day;
var HttpError = require('../../libs/error-handler').HttpError;
var MarksData = require('../../models/Mark').Mark;

var todayMonth = moment(new Date()).get('month');


/* GET days listing. */
router.get('/getdays', (req, res, next) => {
	DaysData.find({}).sort({date: -1}).exec((err, datadays) => {
		if (err) next(err);
		res.json(datadays);
	});
});

router.post('/updatelist/:id', (req, res, next) => {
	DaysData.findById(req.params.id, (err, day) => {
		if (err) {
			next(err);
		} else if (!day) {
			next(new HttpError(404, 'Day not found'));
		}

		day.items.push({
			title: req.body.title,
			price: Number(req.body.price),
		});

		day.save((err, updatedDay) => {
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
