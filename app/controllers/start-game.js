import Ember from 'ember';

export default Ember.Controller.extend({

	queryParams: ['city', 'company'],

	score: 0,

	incorrectAnswersInARow: 0,

	guess: '',

	isCorrectGuess: false,

	isIncorrectGuess: false,

	peopleWhoHaveAlreadyBeenGuessed: [],

	isGameOver: false,

	numPeopleToGuess: function(){
		return this.peopleWhoHaveNotBeenGuessedYet().length;
	}.property(),

	currentPersonBeingGuessed: function(){
		return this.get('model').objectAt(0);
	}.property(),

	chooseNextPerson: function(){
		var unguessedPeople = this.peopleWhoHaveNotBeenGuessedYet();
		var nextPerson;
		if (unguessedPeople.length === 0){
			this.set('isGameOver', true);
		}
		else{
		 	nextPerson = this.peopleWhoHaveNotBeenGuessedYet().objectAt(0);
		}	
		this.set('numPeopleToGuess', this.peopleWhoHaveNotBeenGuessedYet().length);
		this.set('currentPersonBeingGuessed', nextPerson);
	},

	peopleWhoHaveNotBeenGuessedYet: function(){
		var peopleWhoHaveAlreadyBeenGuessed = this.get('peopleWhoHaveAlreadyBeenGuessed');
		var undiscoveredPeople = this.get('model').filter(function(person){
			var personID = person.get('id');
			var hasAlreadyBeenGuessed = peopleWhoHaveAlreadyBeenGuessed.indexOf(personID) > -1;
			return !hasAlreadyBeenGuessed;
		}).toArray();

		
		return undiscoveredPeople;
	},

	cycleToNextPerson : function(correctPerson, wasCorrect){
		var peopleWhoHaveAlreadyBeenGuessed = this.get('peopleWhoHaveAlreadyBeenGuessed');
		peopleWhoHaveAlreadyBeenGuessed.push(correctPerson.get('id'));
		this.set('peopleWhoHaveAlreadyBeenGuessed', peopleWhoHaveAlreadyBeenGuessed);
		
		this.chooseNextPerson();

		this.set('isCorrectGuess', wasCorrect);
		this.set('isIncorrectGuess', !wasCorrect);
		this.set('guess', '');
		this.set('incorrectAnswersInARow', 0);
	},

	handleCorrectGuess: function(correctPerson){
		this.cycleToNextPerson(correctPerson, true);
					
		var score  = this.get('score');
		this.set('score', ++score);
	},

	handleIncorrectGuess: function(correctPerson){
		var incorrectGuesses = this.get('incorrectAnswersInARow');
		if (incorrectGuesses >= 3){
			this.cycleToNextPerson(correctPerson, false);
		}
		else{
			this.set('isCorrectGuess', false);
			this.set('isIncorrectGuess', true);
			this.set('incorrectAnswersInARow', ++incorrectGuesses);

		}
	},

	actions: {
		checkGuess: function(){
			if (!this.get('isGameOver')){
				var guess = this.get('guess');
				var correctPerson = (this.get('currentPersonBeingGuessed'));
				if (guess === correctPerson.get('fullName')){
					this.handleCorrectGuess(correctPerson);
				}
				else{
					this.handleIncorrectGuess(correctPerson);
				}
			}
		}
	}

});
