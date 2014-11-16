var foodApp = angular.module('foodApp', ['geolocation'])

foodApp.directive('loading', function () {
      return {
        restrict: 'E',
        replace:true,
        template: '<div class="loading"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20" />LOADING...</div>',
        link: function (scope, element, attr) {
              scope.$watch('loading', function (val) {
                  if (val)
                      $(element).show();
                  else
                      $(element).hide();
              });
        }
      }
  }).controller('FoodController', function($scope, $http, geolocation) {
   
    $scope.findStuff = function() {
        $scope.loading = true
        geolocation.getLocation().then(function(data){

            console.log($scope.loading)
            $scope.lat = data.coords.latitude
            $scope.long = data.coords.longitude
            $http({
                method:'GET',
                url: '/find',
                params: {lat: data.coords.latitude, long: data.coords.longitude }
            })
            .success(function(data, status, headers, config){
                $scope.loading = false;
                $scope.data =  data.businesses;
            })
            .error(function(data, status, headers, config){
                $scop.loading = false;
                return "ERROR!"
            })
          
        });      
    }
    
    $scope.random = function() {
        return 0.5 - Math.random();
    }
})