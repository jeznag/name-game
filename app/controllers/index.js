import Ember from 'ember';

export default Ember.Controller.extend({

	cityName : "",

	companyName : "",

	actions: {
	    startGame: function() {
	    	var chosenCity = this.get('cityName');
	    	var chosenCompany = this.get('companyName');
	      	this.transitionToRoute('startGame', {queryParams: {city: chosenCity, company: chosenCompany}});
	    }
  	}

});
