import DS from 'ember-data';

let Person = DS.Model.extend({
  fullName: DS.attr( 'string' ),
  description: DS.attr( 'string' ),
  photoURL: DS.attr( 'string' )
});

Person.reopenClass({
  FIXTURES: [
    { id: 1, fullName: 'Nassim Taleb', description: 'I made billions of dollars during the GFC', photoURL: 'http://upload.wikimedia.org/wikipedia/commons/9/9b/Taleb_mug.JPG' },
    { id: 2, firstName: 'Bill Gates' , description: 'I started a little company that built software that a few people use today. I got bored of business so I now concentrate on charitable efforts', 
    photoURL:  'http://upload.wikimedia.org/wikipedia/commons/0/01/Bill_Gates_July_2014.jpg'
    }
  ]
});

export default Person;