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
                $scope.data =  data.businesses;
            })
            .error(function(data, status, headers, config){
                return "ERROR!"
            })
          
        });      
    }
    
    $scope.random = function() {
        return 0.5 - Math.random();
    }
})