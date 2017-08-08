const mongoose = require('../../libs/mongoose');
const Promise = require('bluebird');
const startDaysData = require('./startDaysData');
const startMarks = require('./startMarks');
const startUsers = require('./startUsers');
var userFor = null;
const cryptPass = require('../../libs/cryptPass');
require('../../models/Day');
require('../../models/Mark');
require('../../models/User');

function createMarks(user) {
  return Promise.each(startMarks, item => {
    const mark = Object.assign({}, item, { userID: user._id });
    const saveMark = new mongoose.models.Mark(mark);
    return saveMark.save();
  });
}

function open() {
  return new Promise(resolve => {
    mongoose.connection.on('open', resolve);
  });
}

function requireModels() {
  return Promise.each(Object.keys(mongoose.models), modelName => {
    return mongoose.models[modelName].ensureIndexes();
  });
}

function dropDb() {
  const db = mongoose.connection.db;
  return new Promise(resolve => db.dropDatabase(resolve));
}

function createDays(marks, user) {
  return Promise.each(startDaysData, day => {
    day.userID = user._id;
    day.items.map(cat => {
      cat.defaultItem = marks.some(
        item => item.title == cat.title && item.defaultItem,
      );
    });
    const saveDay = new mongoose.models.Day(day);
    return saveDay.save();
  });
}

function createUsers() {
  const _user = startUsers[0];
  const cryptedPass = () => cryptPass(_user.password);
  // const user = Object.assign({},_user, {password: });

  return cryptedPass()
    .then(hash => Object.assign({}, _user, { password: hash }))
    .then(readyUser => {
      const saveUser = new mongoose.models.User(readyUser);
      return saveUser.save();
    });
}

function findUser() {
  return mongoose.models.User
    .find({ username: 'test' })
    .then(users => (userFor = users[0]));
}

open()
  .then(dropDb)
  .then(requireModels)
  .then(createUsers)
  .then(findUser)
  .then(() => createMarks(userFor))
  .then(marks => createDays(marks, userFor))
  .then(() => mongoose.disconnect())
  .catch(err => console.log(err));
