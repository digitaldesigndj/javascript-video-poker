var poker = require( '../poker.js' );

// Bindings used for localStorage

poker.credits.subscribe(function(newValue) {
	localStorage.setItem('credits', newValue );
});

poker.max_credits.subscribe(function(newValue) {
	localStorage.setItem('max_credits', newValue );
});

poker.hands_played.subscribe(function(newValue) {
	localStorage.setItem('hands_played', newValue );
});

poker.free_credits_obtained.subscribe(function(newValue) {
	localStorage.setItem('free_credits_obtained', newValue );
});