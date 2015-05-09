import DS from 'ember-data';
import Ember from 'ember';

var inflector = Ember.Inflector.inflector;

inflector.irregular('person', 'people');
inflector.singular(/person/, 'person');

let Person = DS.Model.extend({
  fullName: DS.attr( 'string' ),
  description: DS.attr( 'string' ),
  photoURL: DS.attr( 'string' ),
  location: DS.attr( 'string' )
});

export default Person;