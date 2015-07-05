var utils = require('./utils');

module.exports = {
	filterPaths: function(data){
		var userData = {};
		var devicePaths = {};

		// get paths for device AND get devices per user
		for(var i=0; i < data.length; i++){
			var lineData = data[i].split(",");
			var deviceId = lineData[1];
			if(deviceId){
				// add to array or create a new array
				if(devicePaths[deviceId]){
					devicePaths[deviceId].push(data[i]);
				}
				else{
					devicePaths[deviceId] = [data[i]];
				}

				// do we have a username?
				var username = lineData[2]
				if(username){
					if(userData[username]){
						userData[username].devices[deviceId] = true;
					}
					else{
						userData[username] = { devices: {} };
						userData[username].devices[deviceId] = true;
					}
				}
			}
		}

		// add all paths to user data (logged in or not logged in)
		for(username in userData){
			for(device in userData[username].devices){
				if(userData[username].paths){
					userData[username].paths = userData[username].paths.concat( devicePaths[device] );
				}
				else{
					userData[username].paths = devicePaths[device];
				}
			}
		}

		// filter out events for paths for each user
		for(username in userData){
			// we need the event sorted because we want the timestamps in order
			userData[username].paths.sort();

			for(var i=0; i < userData[username].paths.length; i++){
				var lineData = userData[username].paths[i].split(",");

				var events = utils.filterEvents(lineData);

				if(userData[username].filteredPaths){
					userData[username].filteredPaths = userData[username].filteredPaths.concat(events);
				}
				else{
					userData[username].filteredPaths = events;
				}
			}
		}

		return userData;
	}
}