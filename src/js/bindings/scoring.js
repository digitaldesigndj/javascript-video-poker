var $     = require( '../../../bower_components/jquery/dist/jquery' )
	ko    = require( '../../../bower_components/knockout/dist/knockout' ),
	poker = require( '../poker.js' );

// Bindings used for scoring
// All of these bindings hold 5 values in an array.
// The 5 values relate to the five cards in the players current hand

// List of suits
poker.suits = ko.dependentObservable( function(){
	return [ this.card1_suit(), this.card2_suit(), this.card3_suit(), this.card4_suit(), this.card5_suit() ];
}, poker);

// List of Values (CSS Class Style)
poker.values = ko.dependentObservable( function(){
	return [ this.card1_value(), this.card2_value(), this.card3_value(), this.card4_value(), this.card5_value() ];
}, poker);

// List of Values (as numbers 2-14)
poker.numerical_values = ko.dependentObservable( function(){
	var values = [],
		sorted_values = [];
	$.each( this.values(), function( i, v ){
		switch ( v ){
			case 'two':
				values.push(2);
				break;
			case 'three':
				values.push(3);
				break;
			case 'four':
				values.push(4);
				break;
			case 'five':
				values.push(5);
				break;
			case 'six':
				values.push(6);
				break;
			case 'seven':
				values.push(7);
				break;
			case 'eight':
				values.push(8);
				break;
			case 'nine':
				values.push(9);
				break;
			case 'ten':
				values.push(10);
				break;
			case 'jack':
				values.push(11);
				break;
			case 'queen':
				values.push(12);
				break;
			case 'king':
				values.push(13);
				break;
			case 'ace':
				values.push(14);
				break;
			default:
				values.push(0);
		}
	});
	sorted_values = values.sort( function( a, b ){ return a - b } );
	return sorted_values;
}, poker);
