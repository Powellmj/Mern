const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  owner_id: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  organizer: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Group = mongoose.model('Group', GroupSchema);