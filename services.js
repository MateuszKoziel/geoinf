function registerFirebaseService (name, url) {
  app.factory(name, function myService(angularFire) {
      var _ref = new Firebase(url);
      return {
        copyToScope: function(scope, variable) {
           return angularFire(_ref, scope, variable);
        },
        copyChildToScope: function(childName, scope, variable) {
           return angularFire(_ref.child(childName), scope, variable);
        }
      };
  });
}

registerFirebaseService('itemService','https://plunkeritems.firebaseio.com/');