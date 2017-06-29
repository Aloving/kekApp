const marksModel = require(`${__base}/models/Mark`).Mark;

module.exports = function markDaysItems(data) {
  const getMarks = function() {
    return marksModel.find({});
  };

  if (data instanceof Array) {
    let localDays = [].concat(data);

    return getMarks()
      .then(marks => {
        localDays = localDays.map(day => markDay(marks, day));
        return localDays;
      })
      .catch();
  } else {
    return getMarks().then(marks => markDay(marks, data)).catch();
  }

  function markDay(marks, day) {
    day.items.map(mItem => {
      mItem.defaultItem = marks.some(
        sItem => sItem.title == mItem.title && sItem.defaultItem
      );
    });

    return day;
  }
};
