var express = require('express');
var router = express.Router();
var DaysData = require('../../models/Day').Day;
var HttpError = require('../../libs/error-handler').HttpError;

/* GET days listing. */
router.get('/getdays', (req, res, next) => {
  DaysData.find({}, (err, datadays) => {
    if (err) return next(err);
    res.json(datadays);
  });
});

router.post('/updatelist/:id', (req, res, next) => {
	DaysData.findById(req.params.id, (err, day) => {
		if (err) next(err);

		if(!day){
			next(new HttpError(404, "Day not found"));
		}

		day.items.push({
			title: req.body.title,
			price: Number(req.body.price)
		});

		day.save((err, updatedDay) => {
			if(err) next(err);
			res.json(updatedDay);
		});
		
	});
});

module.exports = router;
