import Mirage from 'ember-cli-mirage';
 
export default Mirage.Factory.extend({

  fullName: function(i) {
    return 'TestPerson' + i;
  },
  location: "Sydney, Australia",
  description: "Test",
  photoURL: function(i) {
    return 'http://www.nuancedi.wwwss10.a2hosted.com/client_jobs/Idea_International/' + i + '.jpg';
  }
});