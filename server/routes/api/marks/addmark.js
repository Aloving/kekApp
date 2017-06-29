const MarksModel = require(`${__base}/models/Mark`).Mark;

module.exports = function(req, res, next) {
  const title = req.body.title;

  const updateMark = () =>
    MarksModel.findOneAndUpdate(
      { title },
      {
        title,
        defaultItem: false,
        create: new Date(),
      },
      {
        upsert: true,
        new: true,
      }
    );

  updateMark().then(marks => res.json(marks)).catch(next);
};
