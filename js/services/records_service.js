var records_service  = angular.module('records_service', []);

records_service.factory('records', function($http) {
    return {
      getNextRecord: function(index) {
      	var promise = $http.get(global.end_points.base_url+global.end_points.records+"?index="+index);
        return promise;
      },
      getDatabaseDetails: function() {
      	var promise = $http.get(global.end_points.base_url+global.end_points.database_details);
        return promise;
      }
    }
  });