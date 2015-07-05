var utils = require('./utils');

// Code Exercise 1 Functions
module.exports = {
	filterPaths: function(data){
		data.sort();

		var paths = {};

		for(var i=0; i < data.length; i++){
			var lineData = data[i].split(",");
			var deviceId = lineData[1];

			var events = utils.filterEvents(lineData);

			if(deviceId){
				// add to array or create a new array
				if(paths[deviceId]){
					paths[deviceId] = paths[deviceId].concat(events);
				}
				else{
					paths[deviceId] = events;
				}
			}
		}

		return paths;
	}
};