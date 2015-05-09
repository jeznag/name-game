import Ember from 'ember';

export default Ember.Route.extend({

	model: function(params) {
		var city = params.city;
		var company =  params.company;

    	var query = {l: city, q: company};

    	var results = this.store.find('person', query);

   	 	return  results;
  	}
});
