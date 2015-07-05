var utils = require("../utils");

describe("utils", function () {
  it("should filter events by line", function () {
    var lineData = [ '2015-03-26 23:55:41', '1f5e0650', '', 'search', 'display', 'impression' ];
    expect(utils.filterEvents(lineData)).toEqual(['search', 'display']);
  });
}); 