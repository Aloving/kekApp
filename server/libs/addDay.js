const mongoose = require('../libs/mongoose');
const User = require('../models/User').User;
const Day = require('../models/Day').Day;
const Promise = require('bluebird');
const ObjectID = require('mongodb').ObjectID;

function open() {
  return new Promise(resolve => {
    mongoose.connection.on('open', resolve());
  });
}

function findUsers() {
  return User.find({});
}

function createDays(users, date) {
  return Promise.each(users, user => {
    const Day = new mongoose.models.Day({
      date,
      userID: ObjectID(user._id),
      items: [],
    });
    return Day.save();
  });
}

async function startFunc(fromDate) {
  await open();
  const users = await findUsers();
  await createDays(users, fromDate);
  mongoose.disconnect();
}

module.exports = startFunc;
