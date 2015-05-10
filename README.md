# Name-game 
Game to help you learn colleague's names when you start a new job. Inspired by Zappos' name game - when employees
log in, they get shown a random colleague's face and have to guess who it is.

You can play the game at http://guess-the-name-game.herokuapp.com/

It retrieves user data from Twitter (using FollowerWonk + Kimono as intermediaries) so you can try and match the names of people you know.

Overall approach:
I've tried to follow TDD on this project. For every new feature, I wrote an acceptance test first and then implemented the code. 

Technologies used:
1. Ember JS for client side rendering and code structure
2. PhantomJS/QUnit for acceptance tests (tests/acceptance-tests)
3. EmberData for retrieving data from Kimono and deserializing it into a format that can be used by Ember Models
4. ember-cli-mirage for performing HTTP mock tests
5. HTML5Up for responsive design boilerplate
6. ember-cli to quickly generate boilerplate and run tests

Future enhancements:
Test coverage is not complete: I have not written any unit tests and thus there is no coverage on the deserialization methods or adapters. I intend to correct this in the next release. There are also other feature ideas (e.g. high score system)/bug fixes outlined in the Issues list for this repo (https://github.com/jeznag/name-game/issues).

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

