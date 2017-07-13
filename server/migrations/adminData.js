const mongoose = require('../libs/mongoose');

const User = require('../models/User').User;
const Day = require('../models/Day').Day;
const Mark = require('../models/Mark').Mark;

const Promise = require('bluebird');

function open() {
  return new Promise((resolve) => {
    mongoose.connection.on('open', resolve);
  });
}

function findUser() {
  return User.find({
    username: 'admin',
  });
}

function findDays() {
  return Day.find({});
}

function findMarks() {
  return Mark.find({});
}

function migrateMarks(marks, userID) {
  return Promise.each(marks, item => {
    let saveMark = item;
    saveMark['userID'] = userID;
    return saveMark.save();
  });
}

function migrateDays(days, userID) {
  return Promise.each(days, item => {
    let saveDay = item;
    saveDay['userID'] = userID;
    return saveDay.save();
  });
}

async function createIds() {
  await open();

  const user = await findUser();
  const userID = user[0]._id;
  const days = await findDays();
  const marks = await findMarks();

  await migrateMarks(marks, userID);
  await migrateDays(days, userID);

  mongoose.disconnect();
}

createIds();
