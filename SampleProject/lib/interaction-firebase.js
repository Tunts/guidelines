'use strict';

var Firebase = require('firebase');

var AUTH_TOKEN = 'zDDGKRwrgxuJ2gpzMVK5I9h2gNDB4dFup7AW5nrh';
var firebaseUrl = 'https://voppwishlist.firebaseio.com/';
var dataRef = new Firebase(firebaseUrl);

exports.resetUserPassword = function objectPatch(email) {

	dataRef.auth(AUTH_TOKEN, function (error, sucess) {
		if (error) {
		  throw new Error('[interaction-firebase.auth][ERROR: Unable to authenticate to Firebase]', err);
		}

		console.log(dataRef.child)
		
		console.log('[interaction-firebase.auth][Success: Successfully authenticated to Firebase]');
		console.log(sucess);
	});
};

this.resetUserPassword('lucas.andrade@tuntscorp.com');