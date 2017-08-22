'use strict';

angular.module('ngAir', ['ngMap'])
  .controller('AirController', ($scope, $http) => {
    $scope.$watchGroup(['searchCountry', 'searchCity', 'searchState'], () => {
      getAirQuality();
    });

    $scope.searchCountry = '';
    $scope.searchCity = '';
    $scope.searchState = '';

    let getAirQuality = () => {
      $http.get("http://api.airvisual.com/v2/city?country=" + $scope.searchCountry + "&state=" + $scope.searchState + "&city=" + $scope.searchCity + "&key=cantseeme")
        .then((response) => {
          console.log(response);
          $scope.aqi = response.data.data.current.pollution.aqius;
          $scope.city = response.data.data.city;
          $scope.cityLocation = response.data.data.location.coordinates.reverse();
          console.log($scope.aqi);
          console.log($scope.cityLocation[0]);
        })
    }
  });
//todo:

//hide API key

//add error message for bad request

//additional info about air quality

//style display sheet, add additional info.

//data graphic: how to visualize air quality index, maybe over a map?
