var $     = require( 'jquery-browserify' ),
	ko    = require( 'knockout' ),
	poker = require( '../poker.js' );

// Bindings used for localStorage

poker.credits.subscribe(function(newValue) {
	localStorage.setItem('credits', newValue );
});

poker.max_credits.subscribe(function(newValue) {
	localStorage.setItem('max_credits', newValue );
});
