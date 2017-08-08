const mongoose = require('../libs/mongoose');

const Schema = mongoose.Schema;
const moment = require('../libs/moment');

function setFormatData(date) {
  return moment(date, 'DD.MM.YYYY').toISOString();
}

function getFormatData(date) {
  return moment(date).format('DD.MM.YYYY');
}

const schema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      unique: true,
      required: true,
      get: getFormatData,
      set: setFormatData,
    },
    items: [
      {
        title: String,
        price: Number,
        defaultItem: Boolean,
      },
    ],
  },
  {
    toObject: { getters: true },
    toJSON: { getters: true },
  }
);

exports.Day = mongoose.model('Day', schema);
