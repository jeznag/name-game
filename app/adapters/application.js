import DS from 'ember-data';

var ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'https://www.kimonolabs.com/api/ondemand/3lxa6r1y?&apikey=XQVGmYm59bXGxBJPiVXCrJIJ3HgeXRiy&kimmodify=1'
});

export default ApplicationAdapter;