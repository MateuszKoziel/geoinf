{"filter":false,"title":"filters.js","tooltip":"/filters.js","undoManager":{"mark":2,"position":2,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":22,"column":3},"action":"insert","lines":["app.filter('objFilter', function() {","  return function(items, filter) {","      if (!filter){","          return items;","      }  ","      var result = {};","        angular.forEach( filter, function(filterVal, filterKey) {","          angular.forEach(items, function(item, key) {","              var fieldVal = item[filterKey];","              if (fieldVal && fieldVal.toLowerCase().indexOf(filterVal.toLowerCase()) > -1){","                  result[key] = item;","              }","          });","        });","        return result;","    };","});","","app.filter('fromNow', function() {","  return function(timestamp) {","    return moment(timestamp).fromNow(); ","  };","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":22,"column":3},"action":"remove","lines":["app.filter('objFilter', function() {","  return function(items, filter) {","      if (!filter){","          return items;","      }  ","      var result = {};","        angular.forEach( filter, function(filterVal, filterKey) {","          angular.forEach(items, function(item, key) {","              var fieldVal = item[filterKey];","              if (fieldVal && fieldVal.toLowerCase().indexOf(filterVal.toLowerCase()) > -1){","                  result[key] = item;","              }","          });","        });","        return result;","    };","});","","app.filter('fromNow', function() {","  return function(timestamp) {","    return moment(timestamp).fromNow(); ","  };","});"]},{"start":{"row":0,"column":0},"end":{"row":23,"column":0},"action":"insert","lines":["app.filter('objFilter', function() {","  return function(items, filter) {","      if (!filter){","          return items;","      }","      var result = {};","        angular.forEach( filter, function(filterVal, filterKey) {","          angular.forEach(items, function(item, key) {","              var fieldVal = item[filterKey];","              if (fieldVal && fieldVal.toLowerCase().indexOf(filterVal.toLowerCase()) > -1){","                  result[key] = item;","              }","          });","        });","        return result;","    };","});","","app.filter('fromNow', function() {","  return function(timestamp) {","    return moment(timestamp).fromNow();","  };","});",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":23,"column":0},"action":"remove","lines":["app.filter('objFilter', function() {","  return function(items, filter) {","      if (!filter){","          return items;","      }","      var result = {};","        angular.forEach( filter, function(filterVal, filterKey) {","          angular.forEach(items, function(item, key) {","              var fieldVal = item[filterKey];","              if (fieldVal && fieldVal.toLowerCase().indexOf(filterVal.toLowerCase()) > -1){","                  result[key] = item;","              }","          });","        });","        return result;","    };","});","","app.filter('fromNow', function() {","  return function(timestamp) {","    return moment(timestamp).fromNow();","  };","});",""]},{"start":{"row":0,"column":0},"end":{"row":22,"column":3},"action":"insert","lines":["app.filter('objFilter', function() {","  return function(items, filter) {","      if (!filter){","          return items;","      }","      var result = {};","        angular.forEach( filter, function(filterVal, filterKey) {","          angular.forEach(items, function(item, key) {","              var fieldVal = item[filterKey];","              if (fieldVal && fieldVal.toLowerCase().indexOf(filterVal.toLowerCase()) > -1){","                  result[key] = item;","              }","          });","        });","        return result;","    };","});","","app.filter('fromNow', function() {","  return function(timestamp) {","    return moment(timestamp).fromNow();","  };","});"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":22,"column":3},"end":{"row":22,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1422571904720,"hash":"f5942d1abfd115867e2922ca19951b801054a8aa"}