angular.module('SteroidsApplication', [
  'supersonic'
])
.controller('IndexController', function($scope, supersonic) {
  $scope.foodEvents = [];
  var dB = firebase.database().ref().child("events")
  console.log(dB);
  dB.once("value", function(snapshot) {
  // The callback function will get called twice, once for "fred" and once for "barney"
  snapshot.forEach(function(childSnapshot) {
    // key will be "fred" the first time and "barney" the second time
    // childData will be the actual contents of the child
    console.log(childSnapshot.val())
    $scope.foodEvents.push(childSnapshot.val());
    $scope.$apply();
  });
});
  $scope.newEvent = false;
  $scope.eventToAdd = {};

  $scope.foodList = ["Pizza", "Chinese", "BBQ", "Sushi"];

  $scope.openURL = function(url) {
    supersonic.app.openURL(url)
  }

  $scope.changeViewMode = function(ev) {
    if (ev.show) {
      ev.show = false;
    }
    else {
      for (var i = 0; i < $scope.foodEvents.length; i++) {
        $scope.foodEvents[i].show = false;
      }
      ev.show = true;
    }
  }

  $scope.changeArrowColor = function (ev) {
      if (ev.arrow == "down.png") {
          ev.arrow = "down2.png";
      } else {
          ev.arrow = "down.png";
      }
  }

  $scope.addEventToDB = function (ev) {
    if (ev.name == undefined || ev.loc == undefined || ev.start == undefined
        || ev.end == undefined || ev.foodType == undefined) {
        alert("Event Info Missing!");
        return;
    }
    ev.show = false;
    ev.arrow = "down.png";
    ev.attending = Math.floor(Math.random() * (49) + 1);
    ev.icon = "images/" + ev.foodType.toLowerCase() + ".png";
    ev.start = ev.start.toString();
    ev.end = ev.end.toString();
    ev.time = ev.start.slice(4, 10) + ", "+ ev.start.slice(16, 21) + " - " + ev.end.slice(4, 10) + ", " + ev.end.slice(16, 21);
    delete ev.start;
    delete ev.end;
    dB.push(ev);
    $scope.foodEvents.push(ev);
    $scope.eventToAdd = {};
    $scope.newEvent = false;
  }
});
