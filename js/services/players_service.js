var players_service  = angular.module('players_service', []);

players_service.factory('origin', function($http) {
    return {
      getPlayerOrigin: function(teams,startYear,endYear) {
      	var promise = $http.get(global.end_points.base_url+global.end_points.players.origin+"?teams=CHN,NYN,HOU&startYear=2014&endYear=2014");
      	promise.then(function(data){
      		console.log("here");
      		return data;
      	});
        return promise;
      },
      getPlayerBirthCountryStats: function(teams,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.player_birth_country_stats+
          '?teams='+teams+'&startYear='+startYear+'&endYear='+endYear);
       
        return promise; 
      },
      getPlayerBirthStateStats: function(teams,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.player_birth_state_stats+
          '?teams='+teams+'&startYear='+startYear+'&endYear='+endYear);
       
        return promise; 
      },
      getPlayerBirthCityStats: function(teams,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.player_birth_city_stats+
          '?teams='+teams+'&startYear='+startYear+'&endYear='+endYear);
      
        return promise; 
      },
      getPlayerWeightGroup: function(teams,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.player_weight_group+
          '?teams='+teams+'&startYear='+startYear+'&endYear='+endYear);
        return promise; 
      },
      getPlayerHeightGroup: function(teams,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.player_height_group+
          '?teams='+teams+'&startYear='+startYear+'&endYear='+endYear);
        return promise; 
      },
      getPitchingWeightGroup: function(teams,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.pitching_weight_group+
          '?teams='+teams+'&startYear='+startYear+'&endYear='+endYear);
        return promise; 
      },
      getPitchingHeightGroup: function(teams,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.pitching_height_group+
          '?teams='+teams+'&startYear='+startYear+'&endYear='+endYear);
        return promise; 
      },
      searchBatter: function(key,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.searchBatter+
          '?key='+key+'&startYear='+startYear+'&endYear='+endYear);
        return promise; 
      },
      searchPitcher: function(key,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.searchPitcher+
          '?key='+key+'&startYear='+startYear+'&endYear='+endYear);
        return promise; 
      },
      getBattingManagerTeamDetails: function(playerid,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.getBattingManagerTeamDetails+
          '?playerid='+playerid+'&startYear='+startYear+'&endYear='+endYear);
        return promise; 
      },
      getPitchingManagerTeamDetails: function(playerid,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.getPitchingManagerTeamDetails+
          '?playerid='+playerid+'&startYear='+startYear+'&endYear='+endYear);
        return promise; 
      },
       getPlayAgeAndExperiance: function(playerid,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.getPlayerAgeAndExperiance+
          '?playerid='+playerid+'&startYear='+startYear+'&endYear='+endYear);
        return promise; 
      },
       getPlayAgeAndExperiancePit: function(playerid,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.getPlayerAgeAndExperiancePit+
          '?playerid='+playerid+'&startYear='+startYear+'&endYear='+endYear);
        return promise; 
      }

    }
  });