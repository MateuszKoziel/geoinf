{"filter":false,"title":"listCtrl.js","tooltip":"/listCtrl.js","undoManager":{"mark":18,"position":18,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":19,"column":1},"action":"remove","lines":["var listCtrl = function($scope, itemService) {","  itemService.copyToScope($scope,'items');","  $scope.newItem = {};","","  $scope.addNewItem = function() {","    var key = guid();","    $scope.newItem.created = new Date();","    $scope.items[key] = $scope.newItem;","    $scope.newItem = {};","  };","  $scope.deleteItem = function(id){","    delete $scope.items[id];","  };","  $scope.removeAll = function() {","    $scope.items = {};","  };","};","var listCtrl = function($scope, itemService) {","  itemService.copyToScope($scope,'items');","}"]},{"start":{"row":0,"column":0},"end":{"row":16,"column":2},"action":"insert","lines":["var listCtrl = function($scope, itemService) {","  itemService.copyToScope($scope,'items');","  $scope.newItem = {};","","  $scope.addNewItem = function() {","    var key = guid();","    $scope.newItem.created = new Date();","    $scope.items[key] = $scope.newItem;","    $scope.newItem = {};","  };","  $scope.deleteItem = function(id){","    delete $scope.items[id];","  };","  $scope.removeAll = function() {","    $scope.items = {};","  };","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":14},"end":{"row":5,"column":20},"action":"remove","lines":["guid()"]},{"start":{"row":5,"column":14},"end":{"row":5,"column":18},"action":"insert","lines":["'aa'"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":17},"end":{"row":5,"column":20},"action":"insert","lines":["aaa"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":4},"end":{"row":5,"column":7},"action":"insert","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":4},"end":{"row":5,"column":7},"action":"remove","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":17},"end":{"row":5,"column":19},"action":"remove","lines":["aa"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":15},"end":{"row":5,"column":17},"action":"remove","lines":["aa"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":14},"end":{"row":5,"column":16},"action":"remove","lines":["''"]},{"start":{"row":5,"column":14},"end":{"row":5,"column":20},"action":"insert","lines":["guid()"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":4},"end":{"row":5,"column":7},"action":"insert","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":4},"end":{"row":7,"column":7},"action":"insert","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"remove","lines":["    // var key = guid();",""]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"remove","lines":["    // $scope.items[key] = $scope.newItem;",""]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["    // var key = guid();",""]},{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["    // $scope.items[key] = $scope.newItem;",""]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":4},"end":{"row":7,"column":7},"action":"remove","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":4},"end":{"row":5,"column":7},"action":"remove","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":14},"end":{"row":5,"column":20},"action":"remove","lines":["guid()"]},{"start":{"row":5,"column":14},"end":{"row":5,"column":24},"action":"insert","lines":["new Date()"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":14},"end":{"row":5,"column":24},"action":"remove","lines":["new Date()"]},{"start":{"row":5,"column":14},"end":{"row":5,"column":20},"action":"insert","lines":["guid()"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":14},"end":{"row":5,"column":20},"action":"remove","lines":["guid()"]},{"start":{"row":5,"column":14},"end":{"row":5,"column":24},"action":"insert","lines":["new Date()"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":13,"column":33},"end":{"row":13,"column":33},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1422571950724,"hash":"662cb258e74e0005d0c7dd3b38c9b774442926fd"}