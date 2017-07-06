const markDaysItem = require(`${__base}/libs/markDaysItem`);
const DayModel = require(`${__base}/models/Day`).Day;
const ObjectID = require('mongodb').ObjectID;
const MarksModel = require(`${__base}/models/Mark`).Mark;

module.exports = (req, res, next) => {
  const userID = req.headers.userid;
  const getMarks = () => MarksModel.find({ userID });
  const getDays = () =>
    DayModel.aggregate([
      {
        $match: {
          userID: ObjectID(userID),
        },
      },
      {
        $sort: { date: 1 },
      },
      {
        $project: {
          date: 1,
          items: 1,
        },
      },
      {
        $group: {
          _id: {
            month: { $month: '$date' },
            year: { $year: '$date' },
          },
          id: { $push: '$_id' },
          items: { $push: '$items' },
        },
      },
    ]);

  function monthsSort(months) {
    return getMarks().then(marks => {
      data = months
        .reduce(function(prev, current) {
          let currentCopy = {
            date: current._id,
            copyItems: current.items,
            items: [],
            _id: new ObjectID(),
          };

          currentCopy.copyItems.forEach(function(item) {
            return item.forEach(function(item) {
              currentCopy.items.push(item);
            });
          });

          currentCopy.items = currentCopy.items.reduce(function(prev, current) {
            var haveInArray = prev.filter(
              item => (item.title == current.title ? item : false)
            );

            haveInArray.length || !haveInArray
              ? (haveInArray[0].price += +current.price)
              : prev.push(current);
            return prev;
          }, []);

          delete currentCopy.copyItems;
          prev.push(currentCopy);

          return prev;
        }, [])
        .map(function(month) {
          month.items.map(function(item) {
            item.defaultItem = marks.some(
              sItem => sItem.title == item.title && sItem.defaultItem
            );
          });
          return month;
        });

      return data;
    });
  }

  getDays()
    .then(monthsSort)
    .then(sortedMonths => res.json(sortedMonths))
    .catch(next);
};
