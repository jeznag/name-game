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
    assert.equal(find('input[name="companyNameInput"]').length, 1, "Page contains company name text field");
    assert.equal(find('input[name="cityNameInput"]').length, 1, "Page contains city name text field");
    assert.equal(find('input[name="startGameButton"]').length, 1, "Page contains button to start game");
  });
});
