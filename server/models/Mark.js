const mongoose = require('../libs/mongoose');

const Schema = mongoose.Schema;
const moment = require('../libs/moment');

mongoose.set('debug', true);

function getFormatData(date) {
  return moment(date).format('DD.MM.YYYY');
}

const schema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      unique: true,
      required: true,
    },
    defaultItem: {
      type: Boolean,
      required: true,
    },
    create: {
      type: Date,
      required: false,
      get: getFormatData,
    },
  },
  {
    toObject: { getters: true },
    toJSON: { getters: true },
  }
);

exports.Mark = mongoose.model('Mark', schema);
