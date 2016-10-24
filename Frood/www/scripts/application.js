angular.module('SteroidsApplication', [
  'supersonic'
])
.controller('IndexController', function($scope, supersonic) {
  $scope.foodEvents = [];

  var dB = firebase.database().ref().child("events")

  dB.once("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      $scope.foodEvents.push(childSnapshot.val());
      if ($scope.foodEvents[$scope.foodEvents.length-1].start) {
        $scope.foodEvents[$scope.foodEvents.length-1].start = new Date($scope.foodEvents[$scope.foodEvents.length-1].start);
      }
      if ($scope.foodEvents[$scope.foodEvents.length-1].end) {
        $scope.foodEvents[$scope.foodEvents.length-1].end = new Date($scope.foodEvents[$scope.foodEvents.length-1].end);
      }
      $scope.$apply();
    });
  });

  $scope.newEvent = false;
  $scope.filterMenu = false;
  $scope.reverse = false;
  $scope.eventToAdd = {};
  $scope.sortingBy = 'start';
  $scope.sortName = 'soon';

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

  $scope.updateAttending = function (ev, going) {
      dB.child(ev.key).child("attending").once('value').then(function (snapshot) {
          if (going) {
              dB.child(ev.key).child("attending").set(snapshot.val() + 1);
              ev.attending = ev.attending + 1;
          } else {
              dB.child(ev.key).child("attending").set(snapshot.val() - 1);
              ev.attending = ev.attending - 1;
          }
          $scope.$apply();
      });
  }

  $scope.SucessWord = 'Thanks for submitting your Frood Event!';
  $scope.successSubmit = function() {
    alert($scope.SucessWord);
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
    dB.push(ev);
    ev.start = new Date(ev.start)
    ev.end = new Date(ev.end)
    $scope.foodEvents.push(ev);
    $scope.successSubmit();
    $scope.eventToAdd = {};
    $scope.newEvent = false;
  }



});
