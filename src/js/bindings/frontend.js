var $     = require( '../../../bower_components/jquery/dist/jquery' )
	ko    = require( '../../../bower_components/knockout/dist/knockout' ),
	poker = require( '../poker.js' );

// Frontend display bindings

$('.tab-scoring').on('click', function(){
	$('.scoring').slideToggle(1000);
});

$('.scoring').hide();

$('.tab-options').on('click', function(){
	$('.options').slideToggle(400);
});

$('.options').hide();

poker.max_credits_message = ko.dependentObservable( function(){
	var message = "Max Credits Obtained: ";
	if( this.max_credits() < this.credits() ){
		this.max_credits( this.credits() );
		return message + this.credits();
	}
	else{
		return message + this.max_credits();
	}
}, poker);

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

poker.card1_value_symbol = ko.dependentObservable( function(){
	return get_symbol( this.card1_value() );
}, poker );

poker.card2_value_symbol = ko.dependentObservable( function(){
	return get_symbol( this.card2_value() );
}, poker );

poker.card3_value_symbol = ko.dependentObservable( function(){
	return get_symbol( this.card3_value() );
}, poker );

poker.card4_value_symbol = ko.dependentObservable( function(){
	return get_symbol( this.card4_value() );
}, poker );

poker.card5_value_symbol = ko.dependentObservable( function(){
	return get_symbol( this.card5_value() );
}, poker );

// The values in the cards module are strings so they can be used as css classes
function get_symbol( value ){
	var symbol = 'T';
	switch ( value ){
		case 'two':
			symbol = '2'
			break;
		case 'three':
			symbol = '3'
			break;
		case 'four':
			symbol = '4'
			break;
		case 'five':
			symbol = '5'
			break;
		case 'six':
			symbol = '6'
			break;
		case 'seven':
			symbol = '7'
			break;
		case 'eight':
			symbol = '8'
			break;
		case 'nine':
			symbol = '9'
			break;
		case 'ten':
			symbol = '10'
			break;
		case 'jack':
			symbol = 'j'
			break;
		case 'queen':
			symbol = 'q'
			break;
		case 'king':
			symbol = 'k'
			break;
		case 'ace':
			symbol = 'a'
			break;
		default:
			symbol = '0'
	}
	return symbol;
}
