app.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/items");

  $stateProvider
    .state('list', {
        url: "/list",
        templateUrl: "listView.html",
        controller: "listCtrl"
    })
    .state('items', {
        url: "/items",
        templateUrl: "itemsView.html",
        controller: "itemsCtrl"
    })
    .state('list.item', {
        url: "/:id",
        templateUrl: "editView.html",
        controller: "editCtrl"
    });
    //$locationProvider.html5Mode(true);
});
