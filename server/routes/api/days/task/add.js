const HttpError = require(`${__base}/libs/error-handler`).HttpError;
const DayModel = require(`${__base}/models/Day`).Day;
const marksModel = require(`${__base}/models/Mark`).Mark;
const ObjectID = require('mongodb').ObjectID;
const markDaysItem = require(`${__base}/libs/markDaysItem`);

module.exports = function(req, res, next) {
  const dayId = req.body.dayid;

  const task = {
    title: req.body.title,
    price: Number(req.body.price),
  };

  const updateDay = () =>
    DayModel.findByIdAndUpdate(
      dayId,
      { $push: { items: task } },
      {
        upsert: true,
        new: true,
      }
    );

  updateDay()
    .then(markDaysItem)
    .then(updatedDay => res.json(updatedDay))
    .catch(next);
};
