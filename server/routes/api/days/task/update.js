const DayModel = require(`${__base}/models/Day`).Day;
const ObjectID = require('mongodb').ObjectID;
const markDaysItem = require(`${__base}/libs/markDaysItem`);

module.exports = (req, res, next) => {
  const updateInfo = {
    title: req.body.title,
    price: req.body.price,
    dayid: req.body.dayid,
    userid: req.body.userid,
    taskid: req.params.id,
  };

  const updateDay = () =>
    DayModel.update(
      {
        _id: ObjectID(updateInfo.dayid),
        userID: ObjectID(updateInfo.userid),
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
