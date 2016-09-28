angular.module('SteroidsApplication', [
  'supersonic'
])
.controller('IndexController', function($scope, supersonic) {


  $scope.foodEvents = []
  $scope.testEvent1 = {
          name: "GEECS BBQ EXTRAVAGANZA",
          loc: "The Lakefill",
          time: "Sep 30, 6:00pm",
          foodType: "BBQ",
          icon:"images/bbq.png",
          desc: "Come join Graduate EECS for friends and food at the Lakefill",
          show: false,
          attending: 52
      }

  $scope.testEvent2 = {
          name: "NuTango Dance Lessons",
          loc: "Parkes Hall 034",
          time: "Sep 29, 8:45pm",
          foodType: "Pizza",
          icon:"images/pizza.png",
          desc: "Come on Wednesdays to meet awesome people and learn one of the most beautiful dances in the world.",
          show: false,
          attending: 37
    }

  $scope.testEvent3 = {
          name: "Library GO",
          loc: " University Library",
          time: "Oct 3, 10:00 AM - 5:00 PM  ",
          foodType: "Pizza",
          icon:"images/pizza.png",
          desc: "Find the Pokemon we've hidden around University Library and snap their pictures for a free T-Shirt.",
          show: false,
          attending: 65
    }

  $scope.testEvent4 = {
          name: "Hack Night is Back",
          loc: "The Garage",
          time: "Oct 1, 7pm",
          foodType: "Sushi",
          icon:"images/sushi.png",
          desc: "Know the basics but aren't too sure on how to make your beautiful website public to the world? Come to our first Hack Night of the year to get started with web development!",
          show: false,
          attending: 41
    }
  $scope.testEvent5 = {
          name: "Boeing Info Session",
          loc: "Tech LR2",
          time: "Sep 29, 7:30pm",
          foodType: "Chinese",
          icon:"images/chinese.png",
          desc: "Interested in a career at Boeing? Come check us out at our only Northwestern Info Session! Stop by to meet some of our team and some free Joyees!",
          show: false,
          attending: 48
    }
  $scope.foodEvents.push($scope.testEvent2)
  $scope.foodEvents.push($scope.testEvent1)
  $scope.foodEvents.push($scope.testEvent4)
  $scope.foodEvents.push($scope.testEvent3)
  $scope.foodEvents.push($scope.testEvent5)



});
