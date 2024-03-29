var problem1 = require("../problem1");

var allData = [ '2015-03-22 21:41:10,6e3c6935,maxine,display,impression',
  '2015-04-02 01:15:22,61ce9088,julia,display,click',
  '2015-03-29 23:06:19,51b2fbf3,,mobile,impression',
  '2015-03-21 11:09:09,1f5e0650,maxine,display,impression',
  '2015-04-03 00:18:46,1f5e0650,,display,impression',
  '2015-03-28 08:48:48,a5955dbc,,display,click',
  '2015-03-22 09:27:00,1f5e0650,maxine,display,impression',
  '2015-03-25 02:12:02,61ce9088,julia,display,impression',
  '2015-03-22 06:42:54,51b2fbf3,,video,click',
  '2015-03-26 23:55:41,1f5e0650,,search,impression',
  '2015-03-28 18:43:40,1f5e0650,,display,impression',
  '2015-03-26 16:32:11,1f5e0650,,display,click',
  '2015-03-21 08:04:11,51b2fbf3,julia,display,impression',
  '2015-03-25 20:22:32,fc1b5c7f,maxine,display,impression',
  '2015-03-22 01:09:36,f6401373,guillermo,display,impression',
  '2015-04-03 02:45:31,1f5e0650,,video,click',
  '2015-03-26 22:11:44,a5955dbc,guillermo,mobile,impression',
  '2015-03-24 23:33:21,51b2fbf3,,display,impression',
  '2015-03-22 04:50:36,51b2fbf3,julia,video,click',
  '2015-03-31 11:31:21,a5955dbc,guillermo,display,click',
  '2015-03-28 09:41:30,61ce9088,julia,mobile,impression',
  '2015-04-02 13:47:34,1f5e0650,,display,click',
  '' ];

describe("problem 1", function () {
  it("should return all paths for a given device", function () {
  	var devicePaths = problem1.filterPaths(allData);
  	expect(devicePaths['f6401373']).toEqual([ 'display']);
  	expect(devicePaths['f640137x']).toEqual(undefined);
  	expect(devicePaths['1f5e0650']).toEqual([ 'display','display','display','search','display','display','display','video']);
  });
}); 