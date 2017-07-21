const MarksModel = require(`${__base}/models/Mark`).Mark;

module.exports = (req, res, next) => {
  const title = req.body.title;
  const userID = req.body.userid;
  const defaultItem = req.body.defaultItem;

  const updateMark = () =>
    MarksModel.findOneAndUpdate(
      {
        userID,
        title,
      },
      {
        title,
        defaultItem,
        create: new Date(),
      },
      {
        upsert: true,
        new: true,
      },
    );

  updateMark().then(marks => res.json(marks)).catch(next);
};
