const db = require('../models');

module.exports = (app) => {
  // Load index page
  app.get('/', (req, res) => {
    db.API.findAll({}).then((dbAPIs) => {
      res.render('index', {
        msg: 'IPA - API catalog!',
        apis: dbAPIs,
      });
    });
  });

  // Load example page and pass in an example by id
  app.get('/apis/:id', (req, res) => {
    db.API.findOne({ where: { id: req.params.id } }).then((dbAPI) => {
      res.render('api', {
        api: dbAPI,
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};
