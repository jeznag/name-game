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
  var NASEEM_TALEB_IMAGE = "http://upload.wikimedia.org/wikipedia/commons/9/9b/Taleb_mug.JPG";

  andThen(function() {
    assert.equal(find('#instructions').length, 1, "Page contains instructions");

    var instructionsText = find('#instructions').text();
    assert.ok(instructionsText.indexOf("Recognise this person?Type in their name and click 'I remember you!' to try your luck.") > -1, "Page contains correct instructions");
  
    assert.equal(find("img[src='" + NASEEM_TALEB_IMAGE + "']").length, 1, "Page contains correct image of Nassim Taleb's face");

    assert.equal(find('.nameGuess').length, 1, "Page contains text box to guess name");
    assert.equal(find('#submitGuessButton').length, 1, "Page contains submitGuessButton");

  });

  find('#submitGuessButton').click();

  andThen(function() {
    assert.equal(find('.incorrectGuessMessage').length, 1, "Page shows incorrectGuessMessage after incorrect guess");
  });

  fillIn('.nameGuess','Nassim Taleb');
  find('#submitGuessButton').click();
  andThen(function() {
    assert.equal(find('.correctGuess').length, 1, "Page shows correctGuess after correct guess");
    assert.ok(find('#faceImage').getAttribute('src') !== NASEEM_TALEB_IMAGE, "Page changes to a new face image after correct answer");
  });

});
