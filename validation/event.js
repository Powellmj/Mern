const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateGroupInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.desc = validText(data.desc) ? data.desc : '';
  data.location = validText(data.location) ? data.location : '';
  data.group = validText(data.group_id) ? data.group_id : '';
  data.date = validText(data.event_date) ? data.event_date : '';
  data.start = validText(data.start_time) ? data.start_time : '';
  data.end = validText(data.end_time) ? data.end_time : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.desc)) {
    errors.desc = 'Description field is required';
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = 'Location field is required';
  }

  if (Validator.isEmpty(data.group_id)) {
    errors.group_id = 'Group field is required';
  }

  if (Validator.isEmpty(data.event_date)) {
    errors.event_date = 'Date field is required';
  }

  if (Validator.isEmpty(data.start_time)) {
    errors.start_time = 'Start time field is required';
  }

  if (Validator.isEmpty(data.end_time)) {
    errors.end_time = 'End time field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};