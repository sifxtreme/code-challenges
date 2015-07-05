var fs = require('fs');

var dependencies = {};
var installedSoftware = {};

// helper functions for commands
var isThisSoftwareRequired = function(software){
  // look over all installed softwares
  for(var key in installedSoftware){
    // if the software is still installed and it has dependencies
    if(installedSoftware[key] && dependencies[key]){
      // look over installed software dependencies
      for(var dependencySoftware in dependencies[key]){
        if(dependencySoftware == software){
          return true;
        }
      }
    }
  }
}

var installSoftware = function(software){
  console.log("  Installing " + software);
  installedSoftware[software] = true;
}

var removeSoftware = function(software){
  console.log("  Removing " + software);
  installedSoftware[software] = false;
}

// commands functions
var dependCommand = function(software){
  var dependentSoftware = software.shift();
  // add dependencies
  for(var i=0; i < software.length; i++){
    var dependency = software[i];
    if(dependencies[dependentSoftware]){
      dependencies[dependentSoftware][dependency] = true;
    }
    else{
      dependencies[dependentSoftware] = {};
      dependencies[dependentSoftware][dependency] = true;
    }
  }
}

var installCommand = function(software, firstPass){
  if(installedSoftware[software]){
    if(firstPass){
      console.log("  " + software + " is already installed.");  
    }
    return;
  }
  else if(!dependencies[software]){
    installSoftware(software);
    return;
  }
  else{
    for(var key in dependencies[software]){
      // install dependencies
      installCommand(key);
    }

    // install software
    installSoftware(software);
  }
}

var removeCommand = function(software, firstPass){
  if(!installedSoftware[software]){
    console.log("  " + software + " is not installed.");
    return;
  }
  else if(isThisSoftwareRequired(software)){
    if(installedSoftware[software] && firstPass){
      /*
        we only want to warn the user if they are directly trying to remove a software
        (versus indirect due to attempted automated cleanup)
      */
      console.log("  " + software + " is still needed.");
      return;
    }
  }
  else{
    // remove software
    removeSoftware(software);

    for(var key in dependencies[software]){
      // remove dependencies (if you can)
      removeCommand(key);
    }
  }
}

var listCommand = function(){
  for(var key in installedSoftware){
    // check to see if its still installed
    if(installedSoftware[key]){
      console.log("  " + key);  
    }
  }
}

// read file into memory
fs.readFile('./input2.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  // get an array of the lines
  var allDataArray = data.split('\n');
  // var allDataArray = data.split('\r\n');

  for(var i=0; i<allDataArray.length; i++){
    var commandLine = allDataArray[i].trim().split(/\s+/);
      
    // always echo out the command line
    console.log(allDataArray[i]);

    // what is our command
    var command = commandLine.shift();

    // handle each command
    switch(command){
      case "DEPEND":
        dependCommand(commandLine);
        break;
      case "INSTALL":
        installCommand(commandLine, true);
        break;
      case "REMOVE":
        removeCommand(commandLine, true);
        break;
      case "LIST":
        listCommand();
        break;
      case "END":
        return;
        break;
      default:
        return;
        break;
    }
  }

});
