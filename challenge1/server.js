var fs = require('fs');

var problem1 = require('./problem1.js');
var problem2 = require('./problem2.js');
var problem3 = require('./problem3.js');
var printer = require('./printer.js');

// read file into memory
fs.readFile('./data/event.csv', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var allDataArray = data.split('\n');

  // problem 1
  var devicePaths = problem1.filterPaths(allDataArray);
  printer.deviceIdChannelPaths(devicePaths);

  // problem 2
  var commonPaths = problem2.filterPaths(devicePaths);
  printer.commonPaths(commonPaths);

  // problem 3
  var userPaths = problem3.filterPaths(allDataArray);
  printer.userChannelPaths(userPaths);

});
