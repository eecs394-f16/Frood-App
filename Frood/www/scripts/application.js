angular.module('SteroidsApplication', [
  'supersonic', 'firebase'
])
.controller('IndexController', function($scope, supersonic, $firebaseObject) {

  var dB = firebase.database().ref().child("events")
  //dB.push(newEvent) This is how to push
  $scope.foodEvents = []
  


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
