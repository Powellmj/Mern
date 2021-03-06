const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
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
  group_id: {
    type: Schema.Types.ObjectId,
    ref: 'Group'
  },
  picture_id: {
    type: String,
    required: false
  },
  event_start: {
    type: String,
    required: true
  },
  event_end: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  attendees: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

module.exports = Event = mongoose.model('Event', EventSchema);