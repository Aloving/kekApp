var express = require('express');
var router = express.Router();
var DaysData = require('../../models/Day').Day;

/* GET users listing. */
router.get('/getdays', function(req, res, next) {
  DaysData.find({}, (err, datadays) => {
    if (err) return next(err);
    res.json(datadays);
  });
});

module.exports = router;
