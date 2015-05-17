import DS from 'ember-data';
import config from '../config/environment';

var counter = 1;
export default DS.RESTSerializer.extend({

    extractSingle: function(store, type, payload, id) {
        var people = payload.results.people;

        payload = {
            people: people
        };
        return this._super(store, type, payload, id);
    },

    extractArray: function(store, type, payload) {
        if (config.environment !== 'production') {
            //using Mirage
            return this._super(store, type, payload);
        }

        var people = payload.results.people;
        payload = {
            people: people
        };
        return this._super(store, type, payload);
    },

    normalizeHash: {
        // Next, normalize individual people, which (after `extract`)
        // are now located under `people`
        people: function(hash) {
            if (config.environment !== 'production') {
                //using Mirage - no normalisation necessary
                return;
            }
            //fix variable names as the model uses fullName and photoURL rather than name/photo
            hash.fullName = hash.name;
            hash.photoURL = hash.photo;
            hash.id = counter;
            counter++;

            delete hash.name;
            delete hash.photo;
        }
    }
});
