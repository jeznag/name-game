import Ember from 'ember';
var gameController = this;

export default Ember.Controller.extend({

	nameGuess: '',

	isCorrectGuess: false,

	isIncorrectGuess: false,

	peopleWhoHaveAlreadyBeenGuessed: [],

	currentPersonBeingGuessed: function(){
		return this.get('model').get(0);
	}.property(),

	getNextPerson: function(){
		if (this.get('peopleWhoHaveNotBeenGuessedYet').length > 0){
			return this.get('peopleWhoHaveNotBeenGuessedYet')[0];
		}
		return null;
	}.property('peopleWhoHaveAlreadyBeenGuessed'),

	peopleWhoHaveNotBeenGuessedYet: function(){
		return this.get('model').filter(function(person){
			var hasAlreadyBeenGuessed = (this.get('peopleWhoHaveAlreadyBeenGuessed').contains(person.get('id')));
			return !hasAlreadyBeenGuessed;
		});
	}.property(),

	actions: {
		checkGuess: function(){
			var guess = this.get('nameGuess');
			var correctPerson = (this.get('currentPersonBeingGuessed'));
			console.log("****Correct person: " + correctPerson);
			if (guess === correctPerson.get('fullName')){
				peopleWhoHaveAlreadyBeenGuessed.push(correctPerson.get('id'));
				nextPerson = getNextPerson();
				isCorrectGuess = true;
				isIncorrectGuess = false;
			}
			else{
				isCorrectGuess = false;
				isIncorrectGuess = true;
			}
		}
	}

});
