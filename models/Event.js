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
    ref: 'groups'
  },
  picture_id: {
    type: String,
    required: false
  },
  event_start: {
    type: Date,
    required: true
  },
  event_end: {
    type: Date,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Event = mongoose.model('Event', EventSchema);