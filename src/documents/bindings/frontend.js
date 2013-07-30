var $     = require( 'jquery-browserify' ),
	ko    = require( 'knockout' ),
	poker = require( '../poker.js' );

// Frontend display bindings

// This formats the credits message
poker.credits_message = ko.dependentObservable( function(){
	return "Credits: " + this.credits();
}, poker);

// Card display bindings
// These keep the proper CSS Class strings applied to each card
poker.card1_class = ko.dependentObservable( function(){
	var cardClass = this.card1_suit() + ' ' + this.card1_value();
	if( this.card1_hold() ){
		cardClass += ' hold';
	}
	return cardClass;
}, poker );

poker.card2_class = ko.dependentObservable( function(){
	var cardClass = this.card2_suit() + ' ' + this.card2_value();
	if( this.card2_hold() ){
		cardClass += ' hold';
	}
	return cardClass;
}, poker );

poker.card3_class = ko.dependentObservable( function(){
	var cardClass = this.card3_suit() + ' ' + this.card3_value();
	if( this.card3_hold() ){
		cardClass += ' hold';
	}
	return cardClass;
}, poker );

poker.card4_class = ko.dependentObservable( function(){
	var cardClass = this.card4_suit() + ' ' + this.card4_value();
	if( this.card4_hold() ){
		cardClass += ' hold';
	}
	return cardClass;
}, poker );

poker.card5_class = ko.dependentObservable( function(){
	var cardClass = this.card5_suit() + ' ' + this.card5_value();
	if( this.card5_hold() ){
		cardClass += ' hold';
	}
	return cardClass;
}, poker );
