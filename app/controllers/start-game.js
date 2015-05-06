import Ember from 'ember';
var gameController = this;

export default Ember.Controller.extend({

	guess: '',

	isCorrectGuess: false,

	isIncorrectGuess: false,

	peopleWhoHaveAlreadyBeenGuessed: [],

	currentPersonBeingGuessed: function(){
		console.log("*** model: " + this.get('model').objectAt(0));
		return this.get('model').objectAt(0);
	}.property(),

	getNextPerson: function(){
		if (this.get('peopleWhoHaveNotBeenGuessedYet').length > 0){
			return this.get('peopleWhoHaveNotBeenGuessedYet').objectAt(0);
		}
		return null;
	}.property('peopleWhoHaveAlreadyBeenGuessed'),

	peopleWhoHaveNotBeenGuessedYet: function(){
		return this.get('model').filter(function(person){
			var hasAlreadyBeenGuessed = this.get('peopleWhoHaveAlreadyBeenGuessed').indexOf(person.get('id')) > -1;
			return !hasAlreadyBeenGuessed;
		});
	}.property(),

	actions: {
		checkGuess: function(){
			var guess = this.get('guess');
			var correctPerson = (this.get('currentPersonBeingGuessed'));
			console.log("****Correct person: " + correctPerson);
			if (guess === correctPerson.get('fullName')){
				this.get('peopleWhoHaveAlreadyBeenGuessed').push(correctPerson.get('id'));
				this.set('nextPerson', this.get('getNextPerson'));
				this.set('isCorrectGuess', true);
				this.set('isIncorrectGuess', false);
			}
			else{
				this.set('isCorrectGuess', false);
				this.set('isIncorrectGuess', true);
			}
		}
	}

});
