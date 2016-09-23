angular.module('SteroidsApplication', [
  'supersonic'
])
.controller('IndexController', function($scope, supersonic) {


  $scope.foodEvents = []
  $scope.testEvent1 = {
          name: "GEECS BBQ",
          loc: "The Lakefill",
          time: "Sep 30, 6:00pm",
          foodType: "BBQ",
          desc: "Come join Graduate EECS for friends and food at the Lakefill",
          show: false

      }

  $scope.testEvent2 = {
          name: "NuTango Dance Lessons",
          loc: " Parkes Hall 034, 1841 Chicago Avenue, Evanston",
          time: "Wed, 8:45pm",
          foodType: "Pizza",
          desc: "Come on Wednesdays to meet awesome people and learn one of the most beautiful dances in the world.",
          show: false
    }
  $scope.foodEvents.push($scope.testEvent2)
  $scope.foodEvents.push($scope.testEvent1)


});
