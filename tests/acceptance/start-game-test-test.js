import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import config from '../../config/environment';
import startApp from 'name-game/tests/helpers/start-app';

var application;
var sampleJSON = {
  "name": "followerwonk",
  "count": 18,
  "results": {
    "people": [
      {
        "name": "TestPerson1",
        "location": "Sydney, Australia",
        "description": "Test",
        "photo": "https://pbs.twimg.com/profile_images/2203982915/161854f_1506096717_936348513_n_400x400.jpg"
      },
      {
        "name": "TestPerson2",
        "location": "Sydney",
        "description": "Test",
        "photo": "https://pbs.twimg.com/profile_images/33362952063/56cc482b6fdf821e073a8187c9fe07ed_400x400.jpeg"
      }
    ]
  }
};

module('Acceptance: StartGameTest', {
  beforeEach: function() {
    config.environment = 'test';
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('start-game works', function(assert) {

  var people = server.createList('person', 4);

  visit('/start-game');

  var TEST_USER_NAME = 'TestPerson0';
  var TEST_USER_IMAGE = "http://www.nuancedi.wwwss10.a2hosted.com/client_jobs/Idea_International/0.jpg";

  andThen(function() {
    assert.equal(find('#instructions').length, 1, "Page contains instructions");

    var instructionsText = find('#instructions').text();
    assert.ok(instructionsText.indexOf("Recognise this person?Type in their name and click 'I remember you!' to try your luck.") > -1, "Page contains correct instructions");
  
    var image = findWithAssert('#faceImage');
    console.log("image: " + (image).attr("src"));
    assert.equal(find("img[src='" + TEST_USER_IMAGE + "']").length, 1, "Page contains correct image of Nassim Taleb's face");

    assert.equal(find('.nameGuess').length, 1, "Page contains text box to guess name");
    assert.equal(find('#submitGuessButton').length, 1, "Page contains submitGuessButton");

  });

  fillIn('.nameGuess','sdfdsfds');
  click('#submitGuessButton');
  stop();
  andThen(function() {
    assert.equal(find('#incorrectGuess').length, 1, "Page shows incorrectGuess after incorrect guess");
  });

  fillIn('.nameGuess',TEST_USER_NAME);
  click('#submitGuessButton');
  andThen(function() {
    assert.equal(find('#correctGuess').length, 1, "Page shows correctGuess after correct guess");
    assert.equal(find("img[src='" + TEST_USER_IMAGE + "']").length, 0, "Page changes to a new face image after correct answer");
    assert.equal(find('#score').text(), "Score: 1 points", "Page increments score after correct guess");
  });

});

function stubEndpointForHttpRequest(url, json) {
    Ember.$.mockjax({
        url: url,
        dataType: 'json',
        responseText: json
    });
}