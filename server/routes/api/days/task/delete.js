const DayModel = require(`${__base}/models/Day`).Day;
const ObjectID = require('mongodb').ObjectID;

module.exports = (req, res, next) => {
  const updateInfo = {
    dayid: req.body.dayid,
    taskid: req.params.id,
    userid: req.body.userid,
  };

  const deleteItem = () =>
    DayModel.update(
      {
        _id: ObjectID(updateInfo.dayid),
        userID: ObjectID(updateInfo.userid),
      },
      {
        $pull: {
          items: { _id: ObjectID(updateInfo.taskid) },
        },
      },
      {
        upsert: false,
        multi: false,
      }
    );

  deleteItem().then(data => res.json(data)).catch(next);
};
