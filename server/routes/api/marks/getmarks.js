const MarksModel = require(`${__base}/models/Mark`).Mark;
const moment = require(`${__base}/libs/moment`);
const todayMonth = moment(new Date()).get('month');

module.exports = function(req, res, next) {
  const getMarks = () => MarksModel.find({});

  getMarks()
    .then(marks => marks.filter(sortByMonth))
    .then(filteredMarks =>
      filteredMarks.reduce(sortByDefault, {
        defaults: [],
        unDefaults: [],
      })
    )
    .then(reducedMarks => res.json(reducedMarks))
    .catch(next);

  function sortByMonth(item) {
    return (
      item.defaultItem ||
      moment(item.create, 'DD.MM.YYYY').get('month') == todayMonth
    );
  }

  function sortByDefault(prev, current) {
    current.defaultItem
      ? prev.defaults.push(current)
      : prev.unDefaults.push(current);
    return prev;
  }
};
