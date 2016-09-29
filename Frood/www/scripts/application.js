angular.module('SteroidsApplication', [
  'supersonic'
])
.controller('IndexController', function($scope, supersonic) {


  $scope.foodEvents = []
  $scope.testEvent1 = {
          name: "GEECS BBQ EXTRAVAGANZA",
          loc: "The Lakefill",
          time: "Sep 30, 6:00 p.m.",
          foodType: "BBQ",
          icon:"images/bbq.png",
          desc: "Come join Graduate EECS for friends and food at the Lakefill",
          fbUrl: "https://www.facebook.com/events/1676750769228818/",
          show: false,
          attending: 52
      }

  $scope.testEvent2 = {
          name: "NuTango Dance Lessons",
          loc: "Parkes Hall 034",
          time: "Oct 1, 8:45 p.m.",
          foodType: "Pizza",
          icon:"images/pizza.png",
          desc: "Come on Wednesdays to meet awesome people and learn one of the most beautiful dances in the world.",
          fbUrl: "https://www.facebook.com/events/1676750769228818/",
          show: false,
          attending: 37
    }

  $scope.testEvent3 = {
          name: "Library GO",
          loc: " University Library",
          time: "Sep 28, 10:00 a.m.",
          foodType: "Pizza",
          icon:"images/pizza.png",
          desc: "Find the Pokemon we've hidden around University Library and snap their pictures for a free T-Shirt.",
          fbUrl: "https://www.facebook.com/events/1676750769228818/",
          show: false,
          attending: 65
    }

  $scope.testEvent4 = {
          name: "Hack Night is Back",
          loc: "The Garage",
          time: "Sep 28, 7:00 p.m.",
          foodType: "Sushi",
          icon:"images/sushi.png",
          desc: "Know the basics but aren't too sure on how to make your beautiful website public to the world? Come to our first Hack Night of the year to get started with web development!",
          fbUrl: "https://www.facebook.com/events/1676750769228818/",
          show: false,
          attending: 41
    }
  $scope.testEvent5 = {
          name: "Boeing Info Session",
          loc: "Tech LR2",
          time: "Oct 10, 7:30 p.m.",
          foodType: "Chinese",
          icon:"images/chinese.png",
          desc: "Interested in a career at Boeing? Come check us out at our only Northwestern Info Session! Stop by to meet some of our team and some free Joyees!",
          fbUrl: "https://www.facebook.com/events/1676750769228818/",
          show: false,
          attending: 48
    }
  $scope.foodEvents.push($scope.testEvent3)
  $scope.foodEvents.push($scope.testEvent4)
  $scope.foodEvents.push($scope.testEvent1)
  $scope.foodEvents.push($scope.testEvent2)
  $scope.foodEvents.push($scope.testEvent5)

  $scope.openURL = function(url) {
    supersonic.app.openURL(url)
  }



});
