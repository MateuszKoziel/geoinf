{"filter":false,"title":"services.js","tooltip":"/services.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":15,"column":0},"action":"remove","lines":["function registerFirebaseService (name, url) {","  app.factory(name, function myService(angularFire) {","      var _ref = new Firebase(url);","      return {","        copyToScope: function(scope, variable) {","           angularFire(_ref, scope, variable);","        },","        copyChildToScope: function(childName, scope, variable) {","           angularFire(_ref.child(childName), scope, variable);","        }","      };","  });","}","","registerFirebaseService('itemService','https://plunkeritems.firebaseio.com/');",""]},{"start":{"row":0,"column":0},"end":{"row":14,"column":78},"action":"insert","lines":["function registerFirebaseService (name, url) {","  app.factory(name, function myService(angularFire) {","      var _ref = new Firebase(url);","      return {","        copyToScope: function(scope, variable) {","           return angularFire(_ref, scope, variable);","        },","        copyChildToScope: function(childName, scope, variable) {","           return angularFire(_ref.child(childName), scope, variable);","        }","      };","  });","}","","registerFirebaseService('itemService','https://plunkeritems.firebaseio.com/');"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":48},"end":{"row":4,"column":48},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1422570311000,"hash":"d5f438904586b88af10c5a3556c52992fe849dfc"}