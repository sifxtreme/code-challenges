// Code Exercise 2 Functions
var sortCommonPathsByFrequency = function(data){
	data.sort(function(a,b) {
		return -1 * (a.value - b.value);
	});
	return data;
}

var convertCommonPathsHashIntoArray = function(paths){
	var pathsArray = [];
	for(var key in paths){
		pathsArray.push({ key: key, value: paths[key] });
	}

	return pathsArray;
}

module.exports = {
	filterPaths: function(data){
		var paths = {};

		for(var key in data){
			var pathToString = data[key].toString();
			if(paths[pathToString]){
				paths[pathToString] += 1;
			}
			else{
				paths[pathToString] = 1;
			}
		}

		return sortCommonPathsByFrequency( convertCommonPathsHashIntoArray(paths) );;
	}
}