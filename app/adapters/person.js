import DS from 'ember-data';
import config from '../config/environment';

var host = "";
if (config.environment !== 'production'){
	host = '/people';
}
else{
	host = 'https://www.kimonolabs.com/api/ondemand/3lxa6r1y?apikey=XQVGmYm59bXGxBJPiVXCrJIJ3HgeXRiy&kimmodify=1';
}

export default DS.RESTAdapter.extend({
	host: host,
	buildURL: function() {
        var normalURL = this._super.apply(this, arguments);
        //remove /results from URL
        var reprocessedURL = normalURL.replace('/people',''); 
        return reprocessedURL;
    }
});