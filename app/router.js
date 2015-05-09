import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('startGame', {path : '/start-game'});
  this.route('highScores', {path : '/high-scores'});
  this.route('about', {path : '/about'});
  this.route('loading');
});
