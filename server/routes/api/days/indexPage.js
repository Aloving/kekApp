const markDaysItem = require(`${__base}/libs/markDaysItem`);
const DayModel = require(`${__base}/models/Day`).Day;

module.exports = function(req, res, next) {
  const getDays = () => DayModel.find({}).sort({ date: -1 }).limit(7);

  getDays().then(markDaysItem).then(days => res.json(days)).catch(next);
};
