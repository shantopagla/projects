
requirejs.config({
    appDir: "../",
    baseUrl: "",
    paths: { 
        /* Load jquery from google cdn. On fail, load local file. */
        'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min', 'lib/jquery-1.7.2.min'],
        /* Load jquery from google cdn. On fail, load local file. */
        'jqueryui': ['//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min', 'lib/jquery-ui.min'],
        /* Load underscore from cdn. On fail, load local file. */
        'underscore': ['//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min', 'lib/underscore-min'],
        /* Load backbone from cdn. On fail, load local file. */
        'backbone': ['//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min', 'lib/backbone-min'],
        /* Load bootstrap from cdn. On fail, load local file. */
        'bootstrap': ['//netdna.bootstrapcdn.com/twitter-bootstrap/2.2.1/js/bootstrap.min', 'lib/bootstrap.min'],
        /* Load Angular from cdn. On fail, load local file. */
        'angularjs': ['//ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min', 'lib/angularjs.min'],
        'angularui': ['lib/ui-bootstrap-tpls-0.6.0.min'],
        'main'          : ['js/main'],
        'utils'         : ['utils'],
        'models'        : ['models/models'],
        'paginator'     : ['views/paginator'],
        'header'        : ['views/header'],
        'winelist'      : ['views/winelist'],
        'winedetails'   : ['views/winedetails'],
        'about'         : ['views/about'],
        'client'        : ['views/client'],
        'talent'        : ['views/talent'],
        'login'         : ['views/login'],
        'plugins'       : ['js/plugins']
    },
    shim: {
        /* Set dependencies (just jQuery) */
        'underscore'    : ['jquery'],   'backbone'      : ['jquery'],   'bootstrap'     : ['jquery'],
        'main'          : ['jquery'], 'utils'         : ['angularui'], 'angularjs'        : ['backbone'], 'paginator'     : ['backbone'],
        'header'        : ['backbone'], 'winelist'      : ['backbone'], 'winedetails'   : ['backbone'], 'about'         : ['backbone'],
        'talent'        : ['backbone'], 'login'         : ['backbone'], 'client'         : ['backbone']
    }
});
require([ 'jquery', 'jqueryui', 'underscore', 'backbone', 'angularjs', 'plugins', 'main'], 
    function($) {
        console.log("Loaded :)");     //  'bootstrap', 'angularui', 
        return {};
    }
);