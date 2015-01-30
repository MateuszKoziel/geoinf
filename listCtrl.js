var listCtrl = function($scope, itemService) {
  itemService.copyToScope($scope,'items');
  $scope.newItem = {};

  $scope.addNewItem = function() {
    var key = new Date();
    $scope.newItem.created = new Date();
    $scope.items[key] = $scope.newItem;
    $scope.newItem = {};
  };
  $scope.deleteItem = function(id){
    delete $scope.items[id];
  };
  $scope.removeAll = function() {
    $scope.items = {};
  };
};