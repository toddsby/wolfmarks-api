/**
* Bookmark.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	
	attributes: {
	
		// Attributes
		
		title: {
			type: 'string'
		},
		
		url: {
			type: 'string'
		},
		
		// Associations
		
		user: {
			model: 'user'	
		},
		
		tags: {
			model: 'tag'
		}
		
	},
	
	// Lifecycle Callbacks
	
	beforeCreate: function(values, cb) {
	
		values.id = shortId.generate();
		cb();
	
	}
	
};