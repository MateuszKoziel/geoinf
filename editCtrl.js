var editCtrl = function($scope, itemService, $stateParams) 
{
  $scope.id = '';
  var promise = itemService.copyChildToScope($stateParams.id, $scope, 'srcItem');
  promise.then(function () {
    $scope.item = angular.copy($scope.srcItem);
  });


  $scope.save = function () {
     $scope.srcItem = angular.copy($scope.item);
  }

  $scope.reset = function () {
     $scope.item = angular.copy($scope.srcItem);
  }
}

