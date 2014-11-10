var foodApp = angular.module('foodApp', ['geolocation'])

foodApp.controller('FoodController', function($scope, $http, geolocation) {
   
    $scope.findStuff = function() {
        geolocation.getLocation().then(function(data){
            $scope.lat = data.coords.latitude
            $scope.long = data.coords.longitude
            $http({
                method:'GET',
                url: '/find',
                params: {lat: data.coords.latitude, long: data.coords.longitude }
            })
            .success(function(data, status, headers, config){
                return data;
            })
            .error(function(data, status, headers, config){
                return "ERROR!"
            })
          
        });      
    }
})