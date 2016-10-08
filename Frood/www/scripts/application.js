angular.module('SteroidsApplication', [
  'supersonic', 'firebase'
])
.controller('IndexController', function($scope, supersonic, $firebaseObject) {

  var dB = firebase.database().ref().child("events")
  $scope.foodEvents = [];
  //dB.push(newEvent) This is how to push

  /*dB.once("value", function(snapshot) {
  // The callback function will get called twice, once for "fred" and once for "barney"
  snapshot.forEach(function(childSnapshot) {
    // key will be "fred" the first time and "barney" the second time
    // childData will be the actual contents of the child
    alert("Hello! I am an alert box!!");
    $scope.foodEvents.push(childSnapshot.val());
  });
});
*/

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
});
