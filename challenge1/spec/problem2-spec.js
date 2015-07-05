var problem2 = require("../problem2");

var data = { 
	'51b2fbf3': [ 'display', 'video', 'video', 'display', 'mobile' ],
  '1f5e0650': [ 'display', 'mobile', 'display'],
  'f6401373': [ 'display' ],
  '6e3c6935': [ 'display' ],
  '61ce9088': [ 'display', 'mobile', 'display' ],
  'fc1b5c7f': [ 'display' ],
  'a5955dbc': [ 'mobile', 'display', 'display' ] 
};

describe("problem 2", function () {
  it("should return the most frequent paths", function () {
  	var commonPaths = problem2.filterPaths(data);
  	expect(commonPaths[0].value).toEqual(3);
  	expect(commonPaths[0].key).toEqual('display');
  	expect(commonPaths[1].value).toEqual(2);
  	expect(commonPaths[1].key).toEqual('display,mobile,display');
  });
}); 