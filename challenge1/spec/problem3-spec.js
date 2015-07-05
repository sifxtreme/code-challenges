var problem3 = require("../problem3");

var allData = [ '2015-03-22 21:41:10,6e3c6935,maxine,display,impression',
  '2015-04-02 01:15:22,61ce9088,julia,display,click',
  '2015-03-29 23:06:19,51b2fbf3,,mobile,impression',
  '2015-03-21 11:09:09,1f5e0650,maxine,display,impression',
  '2015-04-03 00:18:46,1f5e0650,,search,impression',
  '2015-03-21 08:04:11,51b2fbf3,julia,display,impression',
  '2015-03-25 20:22:32,fc1b5c7f,maxine,display,impression',
  '2015-03-24 23:33:21,51b2fbf3,,display,impression',
  '2015-03-22 04:50:36,51b2fbf3,julia,video,click',
  '2015-03-28 09:41:30,61ce9088,julia,mobile,impression',
  '' ];

describe("problem 1", function () {
  it("should return all paths for a given device", function () {
  	var userPaths = problem3.filterPaths(allData);
  	expect(userPaths['julia'].filteredPaths.length).toEqual(6);
  	expect(userPaths['maxine'].filteredPaths).toEqual(['display', 'display', 'display', 'search']);
  	expect(userPaths['guillermo']).toEqual(undefined);
  });
}); 