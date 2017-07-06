'use strict';

angular.module('ngAir', [])
  .controller('AirController', ($scope, $http) => {
    $scope.$watch('search', () => {
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
          $scope.aqi = response.data.data.current.pollution.aqius;
          $scope.city = response.data.data.city;


        })
    }
  });
//todo:

//hide API key

//figure out correct expression for ng-if in air-data.html partial page
