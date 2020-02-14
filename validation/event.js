const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEventInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.desc = validText(data.desc) ? data.desc : '';
  data.location = validText(data.location) ? data.location : '';
  data.group = validText(data.group_id) ? data.group_id : '';
  data.start = validText(data.event_start) ? data.event_start : '';
  data.end = validText(data.event_end) ? data.event_end : '';

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

  if (Validator.isEmpty(data.event_start)) {
    errors.event_start = 'Start date and time field is required';
  }

  if (Validator.isAfter(data.event_start,'2025-01-01')) {
    errors.event_start = 'Start date must be before 01-01-2025';
  }
  
  if (Validator.isEmpty(data.event_end)) {
    errors.event_end = 'End date and time field is required';
  }

  if (Validator.isBefore(data.event_end, new Date(data.event_start).toDateString())) {
    errors.event_end = 'End date must be after the start date or time '
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};