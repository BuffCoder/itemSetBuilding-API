// /// <reference path="../../../typings/tsd.d.ts"/>
// 'use strict';

// // Testing frameworks
// var chai = require('chai'),
// 	should = chai.should(),
// 	expect = chai.expect,
// 	sinon = require('sinon');
	
// // Modules to be mocked
// var Promise = require('bluebird'),
// 	dbConnection = require('../../../dest/database/dbConnection');

// // Module to be tested
// var userCollection = require('../../../dest/database/collections/users');
	
// describe('Success: database.collections.users', function() {
// 	var user = {
// 		email: 'TestUser@email.com',
// 		password: 'test'
// 	};
	
// 	beforeEach(function() {
// 		sinon.stub(dbConnection, 'getConnection', function() {
// 			return {
// 				then: function(callback) {
// 					callback({
// 						users: {
// 							find: function() {
// 								return {
// 									toArray: function(callback) {
// 										callback(null, user);
// 									}
// 								};
// 							},
// 							insert: function(input, callback) {
// 								callback(null, input);
// 							}
// 						}
// 					});
// 				}	
// 			};
// 		});
// 	});
	
// 	afterEach(function() {
// 		dbConnection.getConnection.restore();
// 	});
	
// 	it("getMethods should return methods for Users collection", function() {
// 		// Arrange
		
// 		// Act
// 		var methods = userCollection.getMethods();
		
// 		// Assert
// 		methods.should.have.property('validate').which.is.a.Function;
// 		methods.should.have.property('register').which.is.a.Function;
// 	});

// 	it("getMethods.validate should return a user", function(done) {
// 		// Arrange
		
// 		// Act
// 		var promise = userCollection.getMethods().validate(user);
		
// 		// Assert
// 		promise.then(function(result) {
// 			result.should.equal(user);
// 			done();
// 		});
// 	});

// });


// describe('Error: database.collections.users', function() {
// 	var user = {
// 		username: 'Test User',
// 		age: 25
// 	};
// 	var errorMessage = 'Error';
	
// 	beforeEach(function() {
// 		sinon.stub(dbConnection, 'getConnection', function() {
// 			return {
// 				then: function(callback) {
// 					callback({
// 						users: {
// 							find: function() {
// 								return {
// 									toArray: function(callback) {
// 										callback(null, user);
// 									}
// 								};
// 							},
// 							insert: function(input, callback) {
// 								callback(null, input);
// 							}
// 						}
// 					});
// 				}	
// 			};
// 		});
// 	});
	
// 	afterEach(function() {
// 		dbConnection.getConnection.restore();
// 	});
	
// 	it("getMethods.get should return a user", function(done) {
// 		// Arrange
		
// 		// Act
// 		var promise = userCollection.getMethods().get();
		
// 		// Assert
// 		promise.catch(function(error) {
// 			error.should.equal(errorMessage);
// 			done();
// 		});
// 	});
	
// 	it("getMethods.validate should return a user", function(done) {
// 		// Arrange
		
// 		// Act
// 		var promise = userCollection.getMethods().validate(user);
		
// 		// Assert
// 		promise.catch(function(error) {
// 			error.should.equal(errorMessage);
// 			done();
// 		});
// 	});
// });