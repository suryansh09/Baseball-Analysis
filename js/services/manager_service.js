var manager_service  = angular.module('manager_service', []);

manager_service.factory('manager', function($http) {
    return {
      getManagerAgeMaturity: function(teams,startYear,endYear) {
      	var promise = $http.get(global.end_points.base_url+global.end_points.managers.manager_age_maturity+
          '?teams='+teams+'&startYear='+startYear+'&endYear='+endYear);
        return promise;
      },
      getManMaturityAwards: function(teams,startYear,endYear) {
      	var promise = $http.get(global.end_points.base_url+global.end_points.managers.getManagerMaturityAwards+
          '?teams='+teams+'&startYear='+startYear+'&endYear='+endYear);
        return promise;
      },
      getManLoyalty: function(manager,startYear,endYear) {
      	var promise = $http.get(global.end_points.base_url+global.end_points.managers.getManagerLoyalty+
          '?manager='+manager+'&startYear='+startYear+'&endYear='+endYear);
        return promise;
      },
      searchManager: function(key,startYear,endYear) {
        var promise = $http.get(global.end_points.base_url+global.end_points.manager_search+
          '?key='+key+'&startYear='+startYear+'&endYear='+endYear);
        return promise;
      },
      getManTeamPerformace: function(manager,startYear,endYear) {
      	var promise = $http.get(global.end_points.base_url+global.end_points.managers.getManagerTeamPerformace+
          '?manager='+manager+'&startYear='+startYear+'&endYear='+endYear);
        return promise;
      },
      getPlayerMan: function(player,startYear,endYear) {
      	var promise = $http.get(global.end_points.base_url+global.end_points.managers.getPlayerManager+
          '?player='+player+'&startYear='+startYear+'&endYear='+endYear);
        return promise;
      }
    }
  });