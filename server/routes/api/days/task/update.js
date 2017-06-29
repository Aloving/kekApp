const DayModel = require(`${__base}/models/Day`).Day;
const ObjectID = require('mongodb').ObjectID;
const markDaysItem = require(`${__base}/libs/markDaysItem`);

module.exports = function(req, res, next) {
  const updateInfo = {
    title: req.body.title,
    price: req.body.price,
    dayid: req.body.dayid,
    taskid: req.params.id,
  };

  const updateDay = () =>
    DayModel.update(
      {
        _id: ObjectID(updateInfo.dayid),
        'items._id': ObjectID(updateInfo.taskid),
      },
      {
        $set: {
          'items.$.price': updateInfo.price,
          'items.$.title': updateInfo.title,
        },
      },
      {
        upsert: true,
        new: true,
      }
    );

  const findThatDay = () => DayModel.findById(updateInfo.dayid);

  updateDay()
    .then(findThatDay)
    .then(markDaysItem)
    .then(updatedDay => res.json(updatedDay))
    .catch(next);
};
