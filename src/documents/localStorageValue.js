module.exports = {
	getLocalStorageValue: function( key, default_value ){
		var value = 0
		if(key && localStorage.hasOwnProperty(key)){
			try{
				value = JSON.parse(localStorage.getItem(key))
			}catch(e){};
		}
		else{
			value = default_value;
		}
		return value; 
	}
}