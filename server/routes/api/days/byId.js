const DayModel = require(`${__base}/models/Day`).Day;
const markDaysItem = require(`${__base}/libs/markDaysItem`);
const ObjectID = require('mongodb').ObjectID;

module.exports = (req, res, next) => {
  const dayid = req.params.id;
  const userID = req.headers.userid;

  const getDay = () => DayModel.findOne({
    _id:  ObjectID(dayid),
    userID: ObjectID(userID)
  });

  getDay()
    .then(markDaysItem)
    .then(formatedDay => {
      const formattedArray = [formatedDay];
      res.json(formattedArray);
    })
    .catch(next);
};
