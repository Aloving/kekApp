const DayModel = require(`${__base}/models/Day`).Day;
const moment = require(`${__base}/libs/moment`);
const ObjectID = require('mongodb').ObjectID;

module.exports = (req, res, next) => {
  const userID = req.headers.userid;

  const getDays = () =>
    DayModel.aggregate([
      {
        $match: {
          userID: ObjectID(userID),
        },
      },
      {
        $project: {
          _id: 1,
          date: 1,
        },
      },
    ]);

  function calendarFormat(days) {
    const _days = days.map(item => {
      let thisDate = item.date;
      item.date = {
        day: moment(thisDate).get('D'),
        month: moment(thisDate).get('month'),
        year: moment(thisDate).get('year'),
      };
      return item;
    });

    return _days;
  }

  getDays()
    .then(calendarFormat)
    .then(formatedDays => res.json(formatedDays))
    .catch(next);
};
