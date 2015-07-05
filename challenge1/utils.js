// Function used for exercises (1 and 3)

var filterClicksAndImpressions = function(value){
	return (value != "impression" && value != "click");
}

module.exports = {
	// we dont want impressions or clicks
	filterEvents: function(lineData){
		var events = lineData.splice(3, lineData.length);
		events = events.filter(filterClicksAndImpressions);
		return events;
	}	
}
