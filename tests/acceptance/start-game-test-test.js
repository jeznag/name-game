import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'name-game/tests/helpers/start-app';

var application;

module('Acceptance: StartGameTest', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('start-game works', function(assert) {
  visit('/start-game');

  andThen(function() {
    assert.equal(find('#instructions').length, 1, "Page contains instructions");

    var instructionsText = find('#instructions').text();
    assert.ok(instructionsText.indexOf("Recognise this person?Type in their name and click 'I remember you!' to try your luck.") > -1, "Page contains correct instructions");
  
    assert.equal(find('.faceImage').length, 1, "Page contains image of face");
  });
});
