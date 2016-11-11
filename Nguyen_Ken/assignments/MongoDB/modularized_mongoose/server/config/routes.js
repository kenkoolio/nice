var wolves = require('./../controllers/wolves.js');

module.exports = function(app){
  app.get('/', function(req, res){
    wolves.index(req, res);
  })

  app.get('/wolves/new', function(req, res){
    res.render('new');
  })

  app.post('/wolves', function(req, res){
    wolves.create(req, res);
  })

  app.get('/wolves/:id', function(req, res){
    wolves.show(req, res);
  })

  app.get('/wolves/:id/edit', function(req, res){
    wolves.edit(req, res);
  })

  app.post('/wolves/:id', function(req, res){
    wolves.update(req, res);
  })

  app.post('/wolves/:id/destroy', function(req, res){
    wolves.destroy(req, res);
  })
}
