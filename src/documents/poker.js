var $       = require('jquery-browserify'),
	ko      = require('knockout'),
	Deck   = require('./deck.js');
	Storage = require('./localStorageValue.js');

Deck.init();

var five_cards = Deck.cards.splice(0, 5);
var saved_credits = 0;
saved_credits = Storage.getLocalStorageValue('credits', 100);
max_credits = Storage.getLocalStorageValue('max_credits', 100);
hands_played = Storage.getLocalStorageValue('hands_played', 0);
// Load existing value if set
// var key = 'credits';

// if(key && localStorage.hasOwnProperty(key)){
// 	try{
// 		saved_credits = JSON.parse(localStorage.getItem(key))
// 	}catch(e){};
// }else{
// 	saved_credits = 100;
// }
// The credits amout is saveed in `localStorage-bindings.js`

module.exports = {
	hold_visible: ko.observable( false ),
	draw_visible: ko.observable( false ),
	new_game_visible: ko.observable( true ),
	card_front_visible: ko.observable( false ),
	message: ko.observable( 'Welcome' ),
	credits: ko.observable( saved_credits ),
	max_credits: ko.observable( max_credits ),
	bet: ko.observable(5),
	hands_played: ko.observable( hands_played ),

	card1_suit:  ko.observable(),
	card1_value: ko.observable(),
	card1_hold:  ko.observable( false ),
	card1_hold_toggle: function(){
		if( this.hold_visible() ){
			this.card1_hold( !this.card1_hold() );
		}
	},

	card2_suit:  ko.observable(),
	card2_value: ko.observable(),
	card2_hold:  ko.observable( false ),
	card2_hold_toggle: function(){
		if( this.hold_visible() ){
			this.card2_hold( !this.card2_hold() );
		}
	},

	card3_suit:  ko.observable(),
	card3_value: ko.observable(),
	card3_hold:  ko.observable( false ),
	card3_hold_toggle: function(){
		if( this.hold_visible() ){
			this.card3_hold( !this.card3_hold() );
		}
	},

	card4_suit:  ko.observable(),
	card4_value: ko.observable(),
	card4_hold:  ko.observable( false ),
	card4_hold_toggle: function(){
		if( this.hold_visible() ){
			this.card4_hold( !this.card4_hold() );
		}
	},

	card5_suit:  ko.observable(),
	card5_value: ko.observable(),
	card5_hold:  ko.observable( false ),
	card5_hold_toggle: function(){
		if( this.hold_visible() ){
			this.card5_hold( !this.card5_hold() );
		}
	},
	draw: function(){
		self = this;
		if( !self.draw_visible() ){
			return;
		}

		// Held All 
		if( self.card1_hold() && self.card2_hold() && self.card3_hold() && self.card4_hold() && self.card5_hold() ) {
			self.scoring();
		} else {

			if( !self.card1_hold() ){
				self.card1_suit( 'undefined' );
				self.card1_value( '' );
				setTimeout( function() {
					var card = Deck.cards.splice( 0, 1 );
					self.card1_suit( card[0].suit );
					self.card1_value( card[0].value );
				}, 600 );
			}
			if( !self.card2_hold() ){
				self.card2_suit( 'undefined' );
				self.card2_value( '' );
				setTimeout( function() {
					var card = Deck.cards.splice( 0, 1 );
					self.card2_suit( card[0].suit );
					self.card2_value( card[0].value );
				}, 600 );
			}
			if( !self.card3_hold() ){
				self.card3_suit( 'undefined' );
				self.card3_value( '' );
				setTimeout( function() {
					var card = Deck.cards.splice( 0, 1 );
					self.card3_suit( card[0].suit );
					self.card3_value( card[0].value );
				}, 600 );
			}
			if( !self.card4_hold() ){
				self.card4_suit( 'undefined' );
				self.card4_value( '' );
				setTimeout( function() {
					var card = Deck.cards.splice( 0, 1 );
					self.card4_suit( card[0].suit );
					self.card4_value( card[0].value );
				}, 600 );
			}
			if( !self.card5_hold() ){
				self.card5_suit( 'undefined' );
				self.card5_value( '' );
				setTimeout( function() {
					var card = Deck.cards.splice( 0, 1 );
					self.card5_suit( card[0].suit );
					self.card5_value( card[0].value );
				}, 600 );
			}

			setTimeout( function() {
				self.scoring();
				self.new_game_visible( true );
			}, 1000 );
		}

		self.draw_visible( false );

		self.card1_hold( false );
		self.card2_hold( false );
		self.card3_hold( false );
		self.card4_hold( false );
		self.card5_hold( false );
		
	},
	incrementBet: function(){
		self = this;
		if( self.bet() === 5 ){
			self.bet(0);
		}
		self.bet( self.bet() + 1 );
	},
	newGame: function(){
		var self = this,
			five_new_cards = []
			delay = 100;
		if( self.credits() >= self.bet() ){
			self.hands_played( self.hands_played() + 1 );
			self.credits( self.credits() - self.bet() );
			Deck.init();

			this.card1_hold(false);
			this.card2_hold(false);
			this.card3_hold(false);
			this.card4_hold(false);
			this.card5_hold(false);

			five_new_cards = Deck.cards.splice(0, 5);

			setTimeout( function() {

				self.card1_suit( 'undefined' );
				self.card1_value( '' );
				self.card2_suit( 'undefined' );
				self.card2_value( '' );
				self.card3_suit( 'undefined' );
				self.card3_value( '' );
				self.card4_suit( 'undefined' );
				self.card4_value( '' );
				self.card5_suit( 'undefined' );
				self.card5_value( '' );

				setTimeout( function() {
					self.card1_suit( five_new_cards[0].suit );
					self.card1_value( five_new_cards[0].value );
				}, 3 * delay );

				setTimeout( function() {
					self.card2_suit( five_new_cards[1].suit );
					self.card2_value( five_new_cards[1].value );
				}, 4 * delay );

				setTimeout( function() {
					self.card3_suit( five_new_cards[2].suit );
					self.card3_value( five_new_cards[2].value );
				}, 5 * delay );

				setTimeout( function() {
					self.card4_suit( five_new_cards[3].suit );
					self.card4_value( five_new_cards[3].value );
				}, 6 * delay );

				setTimeout( function() {
					self.card5_suit( five_new_cards[4].suit );
					self.card5_value( five_new_cards[4].value );
					self.draw_visible( true );
					self.hold_visible( true );
				}, 7 * delay );

			}, 2 * delay );


			self.new_game_visible( false );
			self.card_front_visible( true );
			self.message( 'Good Luck' );
		}else{
			alert( 'You went broke! But this is no casino, have a 100 credits on the house' );
			self.credits( 100 );
		}
	},
	// The following are functions only... not to be used in a KO binding
	scoring: function(){
		var straights = [
				[2,3,4,5,14],
				[2,3,4,5,6],
				[3,4,5,6,7],
				[4,5,6,7,8],
				[5,6,7,8,9],
				[6,7,8,9,10],
				[7,8,9,10,11],
				[8,9,10,11,12],
				[9,10,11,12,13],
				[10,11,12,13,14]
			],
			royal_straight = [10,11,12,13,14],
			pair_count = 0,
			triple_count = 0,
			jacks_or_better = false,
			straight = false;

		this.hold_visible( false );
		self.message( 'You lose, please try again' );

		// 2 Pair, 3 of a Kind, 4 of Kind, Full House
		$.each( [2,3,4,5,6,7,8,9,10,11,12,13,14], function( i, v ){
			var matches = self.countInArray( self.numerical_values(), v );
			if( matches === 2 ){
				pair_count++;
				if( v >= 11 ){
					self.message('Jacks or Better, You win: ' + self.bet() );
					self.credits( self.credits() + self.bet() );
				}
			}
			if( matches === 3 ){
				self.message('Three of a Kind, You win: ' + self.bet() * 3 );
				self.credits( self.credits() + ( self.bet() * 3 ) );
				triple_count++;
			}
			if( matches === 4 ){
				self.message('Four of a Kind, You win: ' + self.bet() * 25 );
				self.credits( self.credits() + ( self.bet() * 25 ) );
			}
		});
		if( pair_count === 2 ){
			self.message('Two Pairs, You win: ' + self.bet() * 2 );
			self.credits( self.credits() + ( self.bet() * 2 ) );
		}
		if( pair_count === 1 && triple_count === 1 ){
			self.message('Full House, You win: ' + self.bet() * 9 );
			self.credits( self.credits() + ( self.bet() * 9 ) );
		}

		// Check if Straight
		$.each( straights, function( i, v ){
			if( JSON.stringify( self.numerical_values() ) === JSON.stringify( v ) ){
				straight = true;
				self.message( 'Straight, You win: ' + self.bet() * 4 );
				self.credits( self.credits() + ( self.bet() * 4 ) );
			}
		});

		// Flush, Straight Flush, Royal Flush
		if( self.countInArray( self.suits(), self.card1_suit() ) === 5 ){
			if( straight ){
				if( JSON.stringify( self.numerical_values() ) === JSON.stringify( royal_straight ) ){
					var win_amount = 250;
					if( self.bet() === 5 ){
						win_amount = 800;
					}
					self.message( 'ROYAL FLUSH!!!, You win: ' + self.bet() * win_amount );
					self.credits( self.credits() + ( self.bet() * win_amount ) );
				}else{
					self.message( 'Straight Flush, You win: ' + self.bet() * 50 );
					self.credits( self.credits() + ( self.bet() * 50 ) );
				}
			}else{
				self.message( 'Flush, You win: ' + self.bet() * 6 );
				self.credits( self.credits() + ( self.bet() * 6 ) );
			}
		}

		// console.log( self.values() );
		// console.log( self.numerical_values() );
		// console.log( self.suits() );
		// console.log( pair_count );
		// console.log( triple_count );
		// console.log( straight );
	},
	countInArray: function( array, what ){
		var count = 0;
		for( var i = 0; i < array.length; i++ ){
			if( array[i] === what ){
				count++;
			}
		}
		return count;
	}
};
