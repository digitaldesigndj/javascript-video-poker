module.exports = {
	getLocalStorageValue: function( key ){
		var value = 0
		if(key && localStorage.hasOwnProperty(key)){
			try{
				value = JSON.parse(localStorage.getItem(key))
			}catch(e){};
		}
		else{
			// hack, only works because both max and credits have the same default
			value = 100;
		}
		return value; 
	}
}