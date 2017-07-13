const marksModel = require(`${__base}/models/Mark`).Mark;

module.exports = function markDaysItems(data, userID) {
  const getMarks = () => marksModel.find({ userID });

  if (data instanceof Array) {
    if (!data.length) return data;
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
    if (!marks.length) return day;
    day.items.map(mItem => {
      mItem.defaultItem = marks.some(
        sItem => sItem.title == mItem.title && sItem.defaultItem
      );
    });

    return day;
  }
};
