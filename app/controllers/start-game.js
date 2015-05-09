import Ember from 'ember';

export default Ember.Controller.extend({

	queryParams: ['city', 'company'],

	score: 0,

	incorrectAnswersInARow: 0,

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

	cycleToNextPerson : function(correctPerson, wasCorrect){
		
		this.get('peopleWhoHaveAlreadyBeenGuessed').push(correctPerson.get('id'));
		this.set('currentPersonBeingGuessed', this.get('getNextPerson'));
		this.set('isCorrectGuess', wasCorrect);
		this.set('isIncorrectGuess', !wasCorrect);
		this.set('guess', '');
		this.set('incorrectAnswersInARow', 0);
	},

	actions: {
		checkGuess: function(){
			var guess = this.get('guess');
			var correctPerson = (this.get('currentPersonBeingGuessed'));
			if (guess === correctPerson.get('fullName')){
				this.cycleToNextPerson(correctPerson, true);
				
				var score  = this.get('score');
				this.set('score', ++score);
			}
			else{
				this.set('isCorrectGuess', false);
				this.set('isIncorrectGuess', true);
				var incorrectGuesses = this.get('incorrectAnswersInARow');
				if (incorrectGuesses >= 3){
					this.cycleToNextPerson(correctPerson, false);
				}
				else{
					this.set('incorrectAnswersInARow', ++incorrectGuesses);
				}
			}
		}
	}

});
