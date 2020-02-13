const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateGroupInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.desc = validText(data.desc) ? data.desc : '';
  data.location = validText(data.location) ? data.location : '';
  data.owner_id = validText(data.owner_id) ? data.owner_id : '';
  data.organizer = validText(data.organizer) ? data.organizer : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.desc)) {
    errors.desc = 'Description field is required';
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = 'Location field is required';
  }

  if (Validator.isEmpty(data.owner_id)) {
    errors.owner_id = 'Owner field is required';
  }

  if (Validator.isEmpty(data.organizer)) {
    errors.organizer = 'Organizer field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};