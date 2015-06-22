define("gordian-knit/app", 
  ["ember","ember/resolver","ember/load-initializers","gordian-knit/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix,
      Resolver: Resolver
    });

    loadInitializers(App, config.modulePrefix);

    __exports__["default"] = App;
  });
define("gordian-knit/initializers/export-application-global", 
  ["ember","gordian-knit/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    function initialize(container, application) {
      var classifiedName = Ember.String.classify(config.modulePrefix);

      if (config.exportApplicationGlobal) {
        window[classifiedName] = application;
      }
    };
    __exports__.initialize = initialize;

    __exports__["default"] = {
      name: "export-application-global",

      initialize: initialize
    };
  });
define("gordian-knit/router", 
  ["ember","gordian-knit/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend({
      location: config.locationType
    });

    Router.map(function () {
      this.resource("items");
      this.route("about");
    });

    __exports__["default"] = Router;
  });
define("gordian-knit/templates/about", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      


      data.buffer.push("<p>My name by GORDIAN KNIT MONSTER</p>\r\n");
      
    });
  });
define("gordian-knit/templates/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      
      data.buffer.push("home");
      }

    function program3(depth0,data) {
      
      
      data.buffer.push("items");
      }

    function program5(depth0,data) {
      
      
      data.buffer.push("about us");
      }

      data.buffer.push("<h1>test home</h1>\r\n\r\n");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
        'class': ("btn btn-primary")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\r\n");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
        'class': ("btn btn-primary")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "items", options) : helperMissing.call(depth0, "link-to", "items", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\r\n");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
        'class': ("btn btn-primary")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\r\n\r\n\r\n");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\r\n");
      return buffer;
      
    });
  });
define("gordian-knit/templates/items", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      


      data.buffer.push("<p>These be my items</p>\r\n\r\n<table class=\"table table-striped\">\r\n  <thead>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Desc</th>\r\n      <th>Price</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <td>Scarf</td>\r\n      <td>Scarf of greatness</td>\r\n      <td>$9000</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Hat</td>\r\n      <td>Hat of greatness</td>\r\n      <td>$9002</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Hat 2</td>\r\n      <td>Hat of other greatness</td>\r\n      <td>$4</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");
      
    });
  });
define("gordian-knit/tests/app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('app.js should pass jshint', function() { 
      ok(true, 'app.js should pass jshint.'); 
    });
  });
define("gordian-knit/tests/gordian-knit/tests/helpers/resolver.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - gordian-knit/tests/helpers');
    test('gordian-knit/tests/helpers/resolver.js should pass jshint', function() { 
      ok(true, 'gordian-knit/tests/helpers/resolver.js should pass jshint.'); 
    });
  });
define("gordian-knit/tests/gordian-knit/tests/helpers/start-app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - gordian-knit/tests/helpers');
    test('gordian-knit/tests/helpers/start-app.js should pass jshint', function() { 
      ok(true, 'gordian-knit/tests/helpers/start-app.js should pass jshint.'); 
    });
  });
define("gordian-knit/tests/gordian-knit/tests/test-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - gordian-knit/tests');
    test('gordian-knit/tests/test-helper.js should pass jshint', function() { 
      ok(true, 'gordian-knit/tests/test-helper.js should pass jshint.'); 
    });
  });
define("gordian-knit/tests/helpers/resolver", 
  ["ember/resolver","gordian-knit/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var config = __dependency2__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix
    };

    __exports__["default"] = resolver;
  });
define("gordian-knit/tests/helpers/start-app", 
  ["ember","gordian-knit/app","gordian-knit/router","gordian-knit/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Application = __dependency2__["default"];
    var Router = __dependency3__["default"];
    var config = __dependency4__["default"];

    __exports__["default"] = function startApp(attrs) {
      var application;

      var attributes = Ember.merge({}, config.APP);
      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

      Ember.run(function () {
        application = Application.create(attributes);
        application.setupForTesting();
        application.injectTestHelpers();
      });

      return application;
    }
  });
define("gordian-knit/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(true, 'router.js should pass jshint.'); 
    });
  });
define("gordian-knit/tests/test-helper", 
  ["gordian-knit/tests/helpers/resolver","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var resolver = __dependency1__["default"];
    var setResolver = __dependency2__.setResolver;

    setResolver(resolver);

    document.write("<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>");

    QUnit.config.urlConfig.push({ id: "nocontainer", label: "Hide container" });
    var containerVisibility = QUnit.urlParams.nocontainer ? "hidden" : "visible";
    document.getElementById("ember-testing-container").style.visibility = containerVisibility;
  });
/* jshint ignore:start */

define('gordian-knit/config/environment', ['ember'], function(Ember) {
  var prefix = 'gordian-knit';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("gordian-knit/tests/test-helper");
} else {
  require("gordian-knit/app")["default"].create({});
}

/* jshint ignore:end */
//# sourceMappingURL=gordian-knit.map