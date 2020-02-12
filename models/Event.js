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
  event_date: {
    type: Date,
    required: true
  },
  start_time: {
    type: String,
    required: true
  },
  end_time: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Event = mongoose.model('Event', EventSchema);