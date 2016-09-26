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

  $scope.testEvent3 = {
          name: "Library GO",
          loc: " University Library, 1970 Campus Drive   ",
          time: "Wed, 10:00 AM - 5:00 PM  ",
          foodType: "Pizza & T-shirt",
          desc: "Find the Pokemon we've hidden around University Library and snap their pictures for a free T-Shirt.",
          show: false
    }

  $scope.testEvent4 = {
          name: "Hack Night is back",
          loc: "The Garage",
          time: "Wed, 7pm",
          foodType: "Koi",
          desc: "Know the basics but aren't too sure on how to make your beautiful website public to the world? Come to our first Hack Night of the year to get started with web development!",
          show: false
    }
  $scope.foodEvents.push($scope.testEvent2)
  $scope.foodEvents.push($scope.testEvent1)
  $scope.foodEvents.push($scope.testEvent3)
  $scope.foodEvents.push($scope.testEvent4)


});
