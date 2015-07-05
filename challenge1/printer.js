var fs = require('fs');

// output results to file...format in the given way
module.exports = {
	deviceIdChannelPaths: function(data){
		var stream = fs.createWriteStream("result/deviceIdChannelPaths.txt");
		stream.once('open', function(fd) {
			for(device in data){
				stream.write(device + ": " + data[device] + "\n");
			}	
		  stream.end();
		});

	},

	commonPaths: function(data){
		var stream = fs.createWriteStream("result/commonPaths.txt");
		stream.once('open', function(fd) {
			for(var i=0; i< Math.min(data.length, 20); i++){
				stream.write(data[i].value + ": " + data[i].key + "\n");
			}
		  stream.end();
		});
	},

	userChannelPaths: function(data){
		var stream = fs.createWriteStream("result/userChannelPaths.txt");
		stream.once('open', function(fd) {
			for(username in data){
				stream.write(username + ": " + data[username].filteredPaths.join(",") + "\n");
			}	
		  stream.end();
		});
	}

}