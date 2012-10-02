
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/partials/:dir/:filename', routes.partials.template);

app.get('/api/posts', routes.api.posts);

app.get('/api/post/read/:id', routes.api.post.read);
app.post('/api/post/new', routes.api.post.new);
app.put('/api/post/edit/:id', routes.api.post.edit);
app.delete('/api/post/delete/:id', routes.api.post.delete);

app.get('/', routes.index);
app.get('/post/new', routes.index);
app.get('/post/read/:id', routes.index);
app.get('/post/edit/:id', routes.index);
app.get('/post/delete/:id', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
