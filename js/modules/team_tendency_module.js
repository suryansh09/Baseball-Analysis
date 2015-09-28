var team_tendency_module = angular.module('team_tendency_module', ["team_service"]);

team_tendency_module.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/team_tendency_module', {
        templateUrl: 'html/widget.html',
        controller : 'team_tendency_controller',
        reloadOnSearch: false
      })
      // when('/school', {
      //   templateUrl: 'html/salaries.html'
      // }).
      // when('/country', {
      //   templateUrl: 'html/support.html'
      // })
  }]);

team_tendency_module.controller('team_tendency_controller', 
    function($log, $scope, performance,$location) {
      $scope.categories = [{link:'team_tendency_module',label:'Playing Style',active:true},
                          ];
      $scope.fields = [{field:'battingStyle',label:'Batting',active:true},
                          {field:'throwingStyle',label:'Pitching'}];
      $scope.field = 'battingStyle';
      $scope.title = 'Playing style';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parseTeamPlayingStyleData(payload,field);
      };
      $scope.fetchDataService = performance.getTeamPlayingStyle;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawPieChartWithArray($scope.data,'chart_div','Team playing style');
        drawTableWithArray($scope.data,'table_div');
      }
  });

