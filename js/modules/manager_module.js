var managerControllers = angular.module('manager_controller', ["manager_service"]);

managerControllers.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/manager_win_loss', {
        templateUrl: 'html/widget.html',
        controller : 'manager_age_perf_controller',
        reloadOnSearch: false
      }).
      when('/award_achievements', {
        templateUrl: 'html/widget.html',
        controller : 'award_achievements_controller',
        reloadOnSearch: false
      }).
      when('/manager_loyalty', {
        templateUrl: 'html/widget.html',
        controller : 'manager_loyalty_controller',
        reloadOnSearch: false
      }).
      when('/manager_team_winloss', {
        templateUrl: 'html/widget.html',
        controller : 'manager_team_winloss_controller',
        reloadOnSearch: false
      }).
      when('/manager_team_batting', {
        templateUrl: 'html/widget.html',
        controller : 'manager_team_batting_controller',
        reloadOnSearch: false
      }).
      when('/manager_team_fielding', {
        templateUrl: 'html/widget.html',
        controller : 'manager_team_fielding_controller',
        reloadOnSearch: false
      }).
      when('/manager_team_pitching', {
        templateUrl: 'html/widget.html',
        controller : 'manager_team_pitching_controller',
        reloadOnSearch: false
      }).
      when('/manager_player_winloss', {
        templateUrl: 'html/widget.html',
        controller : 'manager_player_winloss_controller',
        reloadOnSearch: false
      }).
      when('/manager_player_batting', {
        templateUrl: 'html/widget.html',
        controller : 'manager_player_batting_controller',
        reloadOnSearch: false
      }).
      when('/manager_player_fielding', {
        templateUrl: 'html/widget.html',
        controller : 'manager_player_fielding_controller',
        reloadOnSearch: false
      }).
      when('/manager_player_pitching', {
        templateUrl: 'html/widget.html',
        controller : 'manager_player_pitching_controller',
        reloadOnSearch: false
      })
  }]);

managerControllers.controller('manager_age_perf_controller', 
    function($log, $scope, manager, $location) {
      $scope.categories = [{link:'manager_win_loss',label:'Win/Loss',active:true},
                          {link:'award_achievements',label:'Awards & Achievements'}];
      $scope.fields = [{field:0,label:'Wins',active:true},
                          {field:1,label:'Losses'},
                          {field:2,label:'Games Managed'}];
      $scope.field = 0
      $scope.title='Manager Age vs Performance';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        console.log(payload);
        $scope.data = parsePlayerAttributeData(payload,'Age Group',field,$scope.fields[field]);
      };
      $scope.fetchDataService = manager.getManagerAgeMaturity;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

managerControllers.controller('award_achievements_controller', 
    function($log, $scope, manager, $location) {
      $scope.categories = [{link:'manager_win_loss',label:'Win/Loss'},
                          {link:'award_achievements',label:'Awards/Achievements',active:true}];
      
      $scope.title='Manager Age and Awards/Achievements';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        console.log(payload);
        $scope.data = parsePlayerAttributeData(payload,'Awards/Achievements',0,'Total Awards');
      };
      $scope.fetchDataService = manager.getManMaturityAwards;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

managerControllers.controller('manager_loyalty_controller', 
    function($log, $scope, manager, $location) {
      $scope.categories = [{link:'manager_loyalty',label:'Loyalty for a Team',active:true}];
     
      $scope.selector = 'person'
      $scope.fetchSearchDataService = manager.searchManager;
      $scope.field = 0
      $scope.title='Manager Loyalty for Team';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        console.log(payload);
        $scope.data = parsePlayerAttributeData(payload,'Team Name',field,'Number of years');
      };
      $scope.fetchDataService = manager.getManLoyalty;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

managerControllers.controller('manager_team_winloss_controller', 
    function($log, $scope, manager, $location) {
      $scope.selector = 'person'
      $scope.fetchSearchDataService = manager.searchManager;
      $scope.categories = [{link:'manager_team_winloss',label:'Win/loss',active:true},
                          {link:'manager_team_batting',label:'Batting'},
                          {link:'manager_team_fielding',label:'Fielding'},
                          {link:'manager_team_pitching',label:'Pitching'}];
      $scope.fields = [{field:0,label:'Games played'},{field:1,label:'Wins',active:true},
                          {field:2,label:'Losses'}];

      $scope.field = 1;
      $scope.title='Team Performance under Manager';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parsePlayerAttributeData(payload,'Teams',field,$scope.fields[field]);
      };
      $scope.fetchDataService = manager.getManTeamPerformace;
    
       $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

managerControllers.controller('manager_team_batting_controller', 
    function($log, $scope, manager, $location) {
      $scope.selector = 'person'
      $scope.fetchSearchDataService = manager.searchBatter;
      $scope.categories = [{link:'manager_team_winloss',label:'Win/loss'},
                          {link:'manager_team_batting',label:'Batting',active:true},
                          {link:'manager_team_fielding',label:'Fielding'},
                          {link:'manager_team_pitching',label:'Pitching'}];
      $scope.fields = [{field:3,label:'Run Scored',active:true},
                          {field:4,label:'At Bats'},
                          {field:5,label:'Hits'},
                          {field:6,label:'Homeruns'},
                          {field:7,label:'Strikeouts'},
                          {field:8,label:'Caught Stealing'}
                        ];

      $scope.field = 3;
      $scope.title='Team Batting Performance under Manager';
       $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parsePlayerAttributeDataWins(payload,'Teams',field,$scope.fields[field-3]);
      };
      $scope.fetchDataService = manager.getManTeamPerformace;
    
       $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

managerControllers.controller('manager_team_fielding_controller', 
    function($log, $scope, manager, $location) {
      $scope.selector = 'person'
      $scope.fetchSearchDataService = manager.searchBatter;
      $scope.categories = [{link:'manager_team_winloss',label:'Win/loss'},
                          {link:'manager_team_batting',label:'Batting'},
                          {link:'manager_team_fielding',label:'Fielding',active:true},
                          {link:'manager_team_pitching',label:'Pitching'}];
       $scope.fields = [];

      $scope.field = 14;
      $scope.title='Team Fielding Performance under Manager';
       $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parsePlayerAttributeDataWins(payload,'Teams',field,'Fielding');
      };
      $scope.fetchDataService = manager.getManTeamPerformace;
    
       $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

managerControllers.controller('manager_team_pitching_controller', 
    function($log, $scope, manager, $location) {
      $scope.selector = 'person'
      $scope.fetchSearchDataService = manager.searchBatter;
      $scope.categories = [{link:'manager_team_winloss',label:'Win/loss'},
                          {link:'manager_team_batting',label:'Batting'},
                          {link:'manager_team_fielding',label:'Fielding'},
                          {link:'manager_team_pitching',label:'Pitching',active:true}];

      $scope.fields = [{field:9,label:'Run Allowed',active:true},
                          {field:10,label:'Completed Games'},
                          {field:11,label:'Shutouts'},
                          {field:12,label:'Hits Allowed'},
                          {field:13,label:'Homeruns Allowed'}
                        ];

      $scope.field =9;

      $scope.title='Team Pitching Performance under Manager';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parsePlayerAttributeDataWins(payload,'Teams',field,$scope.fields[field-9]);
      };
      $scope.fetchDataService = manager.getManTeamPerformace;
    
       $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

managerControllers.controller('manager_player_winloss_controller', 
    function($log, $scope, manager, $location) {

      $scope.categories = [{link:'manager_player_winloss',label:'Win/loss',active:true},
                          {link:'manager_player_batting',label:'Batting'},
                          {link:'manager_player_fielding',label:'Fielding'},
                          {link:'manager_player_pitching',label:'Pitching'}];
      $scope.fields = [{field:'wins',label:'Wins',active:true},
                          {field:'losses',label:'Losses'},
                          {field:'gamesPlayed',label:'Games played'}];

      $scope.field = 'wins';
      $scope.title='Player Performance under Manager';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parseTeamPerformanceData(payload,selectedTeams,startYear,endYear,field);
      };
      $scope.fetchDataService = manager.getPlayerMan;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

managerControllers.controller('manager_player_batting_controller', 
    function($log, $scope, manager, $location) {

      $scope.categories = [{link:'manager_player_winloss',label:'Win/loss'},
                          {link:'manager_player_batting',label:'Batting',active:true},
                          {link:'manager_player_fielding',label:'Fielding'},
                          {link:'manager_player_pitching',label:'Pitching'}];
      $scope.fields = [{field:'runsScored',label:'Run Scored',active:true},
                          {field:'atBats',label:'At Bats'},
                          {field:'hits',label:'Hits'},
                          {field:'homeruns',label:'Homeruns'},
                          {field:'strikeOuts',label:'Strikeouts'},
                          {field:'caughtStealing',label:'Caught Stealing'}
                        ];

      $scope.field = 'runsScored';
      $scope.title='Player Batting Performance under Manager';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parseTeamPerformanceData(payload,selectedTeams,startYear,endYear,field);
      };
      $scope.fetchDataService = manager.getPlayerMan;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

managerControllers.controller('manager_player_fielding_controller', 
    function($log, $scope, manager, $location) {

      $scope.categories = [{link:'manager_player_winloss',label:'Win/loss'},
                          {link:'manager_player_batting',label:'Batting'},
                          {link:'manager_player_fielding',label:'Fielding',active:true},
                          {link:'manager_player_pitching',label:'Pitching'}];
       $scope.fields = [];

      $scope.field = 'fieldingPercentage';
      $scope.title='Player Fielding Performance under Manager';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parseTeamPerformanceData(payload,selectedTeams,startYear,endYear,field);
      };
      $scope.fetchDataService = manager.getPlayerMan;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

managerControllers.controller('manager_player_pitching_controller', 
    function($log, $scope, manager, $location) {

      $scope.categories = [{link:'manager_player_winloss',label:'Win/loss'},
                          {link:'manager_player_batting',label:'Batting'},
                          {link:'manager_player_fielding',label:'Fielding'},
                          {link:'manager_player_pitching',label:'Pitching',active:true}];
      $scope.fields = [{field:'runsAllowed',label:'Run Allowed',active:true},
                          {field:'completeGames',label:'Complete Games'},
                          {field:'shutouts',label:'Shutouts'},
                          {field:'hitsAllowed',label:'Hits Allowed'},
                          {field:'homerunsAllowed',label:'Homeruns Allowed'}
                        ];

      $scope.field = 'runsAllowed';

      $scope.title='Player Pitching Performance under Manager';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parseTeamPerformanceData(payload,selectedTeams,startYear,endYear,field);
      };
      $scope.fetchDataService = manager.getPlayerMan;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });
