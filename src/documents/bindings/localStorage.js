var $     = require( 'jquery-browserify' ),
	ko    = require( 'knockout' ),
	poker = require( '../poker.js' );

// Bindings used for localStorage

// Set localStorage Credits here
poker.credits.subscribe(function(newValue) {
	localStorage.setItem('credits', newValue );
});
