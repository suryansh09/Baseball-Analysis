var baseball_main = angular.module('baseball_main', [
  'ngRoute',
  'team_module',
  'players_controller',
  'salaries_controller',
  'filter_module',
  'isteven-multi-select',
  'widget_module',
  'manager_controller',
  'team_tendency_module',
  'records_service']);

baseball_main.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/team', {
        templateUrl: 'html/widget.html',
        controller : 'team_controller',
        reloadOnSearch: false
      }).
      when('/players', {
        templateUrl: 'html/players.html',
        reloadOnSearch: false
      }).when('/team_orientation', {
        templateUrl: 'html/widget.html',
        controller : 'team_orientation_controller',
        reloadOnSearch: false
      })
      .otherwise({
        templateUrl: 'html/home.html',
        reloadOnSearch: false
      })
  }]);

baseball_main.controller('home_controller', 
    function($log, $scope, records, $location) {
      $scope.show = false;
      var promise = records.getDatabaseDetails();
      promise.then(
      function(payload) { 
        $scope.show = true;
        $scope.totalRecords = payload.data.records;
        $scope.players = payload.data.players;
        $scope.teams = payload.data.teams;
        $scope.managers = payload.data.managers;
      },
      function(errorPayload) {
          console.log('failure loading '+errorPayload);
      }); 
    
  });






