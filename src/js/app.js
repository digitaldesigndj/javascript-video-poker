var ko    = require('../../bower_components/knockout/dist/knockout'),
	$ = require('../../bower_components/jquery/dist/jquery'),
	poker = require('./poker.js');

require('./bindings/scoring.js');
require('./bindings/frontend.js');
require('./bindings/localStorage.js');
require('./bindings/keybindings.js');

ko.applyBindings( poker );
