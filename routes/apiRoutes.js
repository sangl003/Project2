const db = require('../models');

module.exports = (app) => {
  // Get all examples
  app.get('/api/apis', (req, res) => {
    db.API.findAll({}).then((dbAPIs) => {
      res.json(dbAPIs);
    });
  });

  // Create a new example
  app.post('/api/apis', (req, res) => {
    db.API.create(req.body).then((dbAPI) => {
      res.json(dbAPI);
    });
  });

  // Delete an example by id
  app.delete('/api/apis/:id', (req, res) => {
    db.API.destroy({ where: { id: req.params.id } }).then((dbAPI) => {
      res.json(dbAPI);
    });
  });
};
