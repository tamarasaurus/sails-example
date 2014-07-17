/**
 * Submission
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	id: 'integer',
    name: {
        type: 'string',
        notEmpty: true
    },
    email: {
      type: 'email', // Email type will get validated by the ORM
      required: true
    },
    latitude: 'float',
    longitude: 'float',
    postcode: {
        type: 'integer',
        maxLength: 4
    }
    //city lat/lng from google
    //postcode validated from list

  }

};
