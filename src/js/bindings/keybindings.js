var $     = require( '../../../bower_components/jquery/dist/jquery' ),
	poker = require( '../poker.js' );

$(window).on( 'keypress', function(e){
	// console.log(e.charCode);
	// char code 0 for Firefox?
	if( e.charCode === 13 || e.charCode === 0 ){
		//enter
		if( poker.draw_visible() ){
			poker.draw();
			return;
		}
		if( poker.new_game_visible() ){
			poker.newGame();
			return;
		}
	}
	if( e.charCode === 49 ){
		//1
		poker.card1_hold_toggle();
	}
	if( e.charCode === 50 ){
		//2
		poker.card2_hold_toggle();
	}
	if( e.charCode === 51 ){
		//3
		poker.card3_hold_toggle();
	}
	if( e.charCode === 52 ){
		//4
		poker.card4_hold_toggle();
	}
	if( e.charCode === 53 ){
		//5
		poker.card5_hold_toggle();
	}
});