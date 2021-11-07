app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data) {
    $scope.fiveDay = data;
  });
  
  $scope.userData = '';
  $scope.getData = function(user) {
    $scope.userData = angular.copy(user);
  };  
}]);

