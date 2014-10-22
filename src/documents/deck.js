module.exports = {
	cards: [],
	init: function(){
		self = this;
		// Remove all the cards from the deck
		self.cards = [];
		// Adds cards to the deck
		self.setupCards();
		// Shuffle the deck
		self.cards = self.shuffle( self.cards );
	},
	setupCards: function(){
		var self   = this,
			suits  = ['clubs', 'diamonds', 'hearts', 'spades'],
			values = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
		for ( var suit_index = 0; suit_index < suits.length; suit_index++ ){
			for ( var value_index = 0; value_index < values.length; value_index++ ){
				self.cards.push( {'suit': suits[suit_index],'value': values[value_index]} )
			}
		}
	},
	// http://bost.ocks.org/mike/shuffle/
	shuffle: function(array){
		var counter = array.length, temp, index;
		while (counter > 0){
			index = (Math.random() * counter--) | 0;
			temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
		}
		return array;
	}
}