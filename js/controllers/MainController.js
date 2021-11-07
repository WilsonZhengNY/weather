app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data) {
    $scope.fiveDay = data;
  });
}]);

app.controller('MainController', function($scope) {
  $scope.userData = '';
  $scope.getData = function(user) {
    $scope.userData = angular.copy(user);
  };
});
