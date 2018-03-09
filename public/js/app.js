'use strict';

  angular.module('ngAir', [])
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
          let data = response.data.data
          $scope.aqi = data.current.pollution.aqius;
          $scope.city = data.city;
          $scope.temp = data.current.weather.tp;
          $scope.wind = data.current.weather.ws;
          $scope.windDir = data.current.weather.wd;
          $scope.cityLocation = data.location.coordinates.reverse();
        }, (response) => {
          $scope.errMsg = "Please enter a valid country, city, and state"
          $scope.status = response.status
          console.log(response.status, response.statusText, $scope.errMsg);
        })
    }
  });
//todo:

//hide API key
