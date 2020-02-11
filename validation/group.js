const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.desc = validText(data.desc) ? data.desc : '';
  data.location = validText(data.location) ? data.location : '';
  data.owner = validText(data.owner_id) ? data.owner_id : '';

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

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};