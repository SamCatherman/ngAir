'use strict';

angular.module('ngAir', [])
  .controller('AirController', ($scope, $http) => {
    $scope.$watch('search', () => {
      getAirQuality();
    });

    $scope.search = "springfield";
    // $scope.searchState = "massachusetts";

    let getAirQuality = () => {
      $http.get("http://api.airvisual.com/v2/city?country=usa&state=massachusetts&city=" + $scope.search + "&key=can'tseeme")
        .then((response) => { console.log(response)})
    }
  });
