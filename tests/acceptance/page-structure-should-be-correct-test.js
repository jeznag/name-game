import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'name-game/tests/helpers/start-app';

var application;
var selectorForStartGameLink = "a[href~='/start-game']";

module('Acceptance: PageStructureShouldBeCorrect', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('index-page-structure-should-be-correct', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find(selectorForStartGameLink).length, 1, "Page contains link to start game");
  });
});
