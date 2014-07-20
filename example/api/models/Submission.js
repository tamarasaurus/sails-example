/**
 * Submission
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
		id: {
			type: 'int',
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: 'string',
			notEmpty: true,
			required: true
		},
		email: {
			type: 'email', // Email type will get validated by the ORM
			required: true,
			notEmpty: true
		},
		latitude: {
			type: 'float',
			required: true,
			notEmpty: true
		},
		longitude: {
			type: 'float',
			required: true,
			notEmpty: true
		},
		postcode: {
			type: 'integer',
			notEmpty: true,
			maxLength: 4
		}
	}

};