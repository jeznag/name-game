import Ember from 'ember';

export default Ember.Controller.extend({

	guess: '',

	isCorrectGuess: false,

	isIncorrectGuess: false,

	peopleWhoHaveAlreadyBeenGuessed: [],

	currentPersonBeingGuessed: function(){
		return this.get('model').objectAt(0);
	}.property(),

	getNextPerson: function(){
		if (this.get('peopleWhoHaveNotBeenGuessedYet').length > 0){
			return this.get('peopleWhoHaveNotBeenGuessedYet').objectAt(0);
		}
		return null;
	}.property('peopleWhoHaveAlreadyBeenGuessed'),

	peopleWhoHaveNotBeenGuessedYet: function(){
		var peopleWhoHaveAlreadyBeenGuessed = this.get('peopleWhoHaveAlreadyBeenGuessed');
		return this.get('model').filter(function(person){
			var personID = person.get('id');
			var hasAlreadyBeenGuessed = peopleWhoHaveAlreadyBeenGuessed.indexOf(personID) > -1;
			return !hasAlreadyBeenGuessed;
		});
	}.property(),

	actions: {
		checkGuess: function(){
			var guess = this.get('guess');
			var correctPerson = (this.get('currentPersonBeingGuessed'));

			if (guess === correctPerson.get('fullName')){
				this.get('peopleWhoHaveAlreadyBeenGuessed').push(correctPerson.get('id'));
				this.set('currentPersonBeingGuessed', this.get('getNextPerson'));
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
