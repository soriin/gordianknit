var express = require('express')
  , bodyParser = require('body-parser')
  , engines = require('consolidate')
  , compression = require('compression')
  , favicon = require('serve-favicon')
  , cookieParser = require('cookie-parser')
  , errorHandler = require('errorhandler')
  ;

var app = express();

// setup views and port
app.set('port', process.env.PORT || 3000);

// middleware
app.use(compression());
// uncomment and point path at favicon if you have one
// app.use(favicon("path to fav icon"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
//app.use(express.static(config.watch.compiledDir));
app.use(express.static(__dirname + '/dist'))
//if (app.get('env') === 'development') {
//  app.use(errorHandler());
//}

// routes
cachebust = ''
//if (process.env.NODE_ENV !== "production") {
//  cachebust = "?b=" + (new Date()).getTime()
//}

var routeOptions = {
  //reload:    config.liveReload.enabled,
  //optimize:  config.isOptimize != null ? config.isOptimize : false,
  cachebust: cachebust
};

app.get('/', function(req, res) {
  res.render('index', routeOptions);
  //res.send("test");
});

//app.use('/', router);

// start it up
var server = app.listen(app.get('port'), function() {
  console.log('Node server listening on port ' + app.get('port'));
});
