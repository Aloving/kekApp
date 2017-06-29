const DayModel = require(`${__base}/models/Day`).Day;
const markDaysItem = require(`${__base}/libs/markDaysItem`);

module.exports = function(req, res, next) {
  const dayid = req.params.id;

  const getDay = DayModel.findById(dayid);

  getDay
    .then(markDaysItem)
    .then(formatedDay => res.json(formatedDay))
    .catch(next);
};
