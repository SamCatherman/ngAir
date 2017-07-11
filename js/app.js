'use strict';

angular.module('ngAir', ['ngMap'])
  .controller('AirController', ($scope, $http) => {
    $scope.$watchGroup(['searchCountry', 'searchCity', 'searchState'], () => {
      getAirQuality();
    });

    $scope.searchCountry = "usa";
    $scope.searchCity = "springfield";
    $scope.searchState = "massachusetts";

    let getAirQuality = () => {
      $http.get("http://api.airvisual.com/v2/city?country=" + $scope.searchCountry + "&state=" + $scope.searchState + "&city=" + $scope.searchCity + "&key=can'tseeme")
        .then((response) => {
          console.log(response);
          console.log($scope.searchCountry);
          console.log(response.data.data.current.pollution.aqius);
          console.log(response.data.data.location.coordinates);
          $scope.aqi = response.data.data.current.pollution.aqius;
          $scope.city = response.data.data.city;

        })
    }
  });
//todo:

//hide API key

//add error message for bad request

//additional info about air quality

//style display sheet, add additional info.

//data graphic: how to visualize air quality index, maybe over a map?
