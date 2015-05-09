module.exports = function(app) {
  var express = require('express');
  var personRouter = express.Router();

  personRouter.get('/', function(req, res) {
    res.send({
      'person': []
    });
  });

  personRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  personRouter.get('/:id', function(req, res) {
    res.send({
      'person': {
        id: req.params.id
      }
    });
  });

  personRouter.put('/:id', function(req, res) {
    res.send({
      'person': {
        id: req.params.id
      }
    });
  });

  personRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/person', personRouter);
};
