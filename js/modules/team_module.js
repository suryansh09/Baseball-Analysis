var team_module = angular.module('team_module', ["team_service"]);

team_module.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/team_win_loss', {
        templateUrl: 'html/widget.html',
        controller : 'team_controller',
        reloadOnSearch: false
      }).
      when('/team_batting', {
        templateUrl: 'html/widget.html',
        controller : 'team_batting_controller',
        reloadOnSearch: false
      }).
      when('/team_pitching', {
        templateUrl: 'html/widget.html',
        controller : 'team_pitching_controller',
        reloadOnSearch: false
      }).
      when('/team_fielding', {
        templateUrl: 'html/widget.html',
        controller : 'team_fielding_controller',
        reloadOnSearch: false
      }).
      when('/fan_following', {
        templateUrl: 'html/widget.html',
        controller : 'fan_following_controller',
        reloadOnSearch: false
      }).
      when('/team_award', {
        templateUrl: 'html/widget.html',
        controller : 'team_award_controller',
        reloadOnSearch: false
      }).
      when('/age_group', {
        templateUrl: 'html/widget.html',
        controller : 'age_group_controller',
        reloadOnSearch: false
      })
      // when('/school', {
      //   templateUrl: 'html/salaries.html'
      // }).
      // when('/country', {
      //   templateUrl: 'html/support.html'
      // })
  }]);

team_module.controller('team_controller', 
    function($log, $scope, performance,$location) {
      $scope.categories = [{link:'team_win_loss',label:'Win/loss',active:true},
                          {link:'team_batting',label:'Batting'},
                          {link:'team_fielding',label:'Fielding'},
                          {link:'team_pitching',label:'Pitching'}];
      $scope.fields = [{field:'wins',label:'Wins',active:true},
                          {field:'losses',label:'Losses'},
                          {field:'gamesPlayed',label:'Games played'}];

      $scope.field = 'wins';
      $scope.title = 'Team performance';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parseTeamPerformanceData(payload,selectedTeams,startYear,endYear,field);
      };
      $scope.fetchDataService = performance.getTeamPerformances;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawLineChart($scope.data,'chart_div','Team performance');
        drawTable($scope.data,'table_div');
      }
  });

team_module.controller('team_batting_controller', 
    function($log, $scope, performance,$location) {
      $scope.categories = [{link:'team_win_loss',label:'Win/loss'},
                          {link:'team_batting',label:'Batting',active:true},
                          {link:'team_fielding',label:'Fielding'},
                          {link:'team_pitching',label:'Pitching'}];
      $scope.fields = [{field:'runsScored',label:'Run Scored',active:true},
                          {field:'atBats',label:'At Bats'},
                          {field:'hits',label:'Hits'},
                          {field:'homeruns',label:'Homeruns'},
                          {field:'strikeOuts',label:'Strikeouts'},
                          {field:'caughtStealing',label:'Caught Stealing'}
                        ];

      $scope.field = 'runsScored';
      $scope.title = 'Team batting performance';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parseTeamPerformanceData(payload,selectedTeams,startYear,endYear,field);
      };
      $scope.fetchDataService = performance.getTeamPerformances;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawLineChart($scope.data,'chart_div',$scope.title);
        drawTable($scope.data,'table_div');
      }
  });

team_module.controller('team_pitching_controller', 
    function($log, $scope, performance,$location) {
      $scope.categories = [{link:'team_win_loss',label:'Win/loss'},
                          {link:'team_batting',label:'Batting'},
                          {link:'team_fielding',label:'Fielding'},
                          {link:'team_pitching',label:'Pitching',active:true}];
      $scope.fields = [{field:'runsAllowed',label:'Run Allowed',active:true},
                          {field:'completeGames',label:'Complete Games'},
                          {field:'shutouts',label:'Shutouts'},
                          {field:'hitsAllowed',label:'Hits Allowed'},
                          {field:'homerunsAllowed',label:'Homeruns Allowed'}
                        ];

      $scope.field = 'runsAllowed';
      $scope.title = 'Team pitching performance';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parseTeamPerformanceData(payload,selectedTeams,startYear,endYear,field);
      };
      $scope.fetchDataService = performance.getTeamPerformances;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawLineChart($scope.data,'chart_div',$scope.title);
        drawTable($scope.data,'table_div');
      }
  });

  team_module.controller('team_fielding_controller', 
    function($log, $scope, performance,$location) {
      $scope.categories = [{link:'team_win_loss',label:'Win/loss'},
                          {link:'team_batting',label:'Batting'},
                          {link:'team_fielding',label:'Fielding',active:true},
                          {link:'team_pitching',label:'Pitching'}];
      $scope.fields = [];

      $scope.field = 'fieldingPercentage';
      $scope.title = 'Team fielding performance';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parseTeamPerformanceData(payload,selectedTeams,startYear,endYear,field);
      };
      $scope.fetchDataService = performance.getTeamPerformances;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawLineChart($scope.data,'chart_div',$scope.title);
        drawTable($scope.data,'table_div');
      }
  });


  team_module.controller('team_orientation_controller', 
    function($log, $scope, performance,$location) {
      $scope.categories = [];
      $scope.fields = [{field:1,label:'Stats'},{field:2,label:'Ranks'}];

      $scope.field = 1;
      $scope.title = 'Team orientation';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        var field1 = field == 1? 'runs':'battingRank';
        var field2 = field == 1? 'out' : 'pitchingRank';
        var label1 = field == 1? 'Runs':'Batting Rank';
        var label2 = field == 1? 'Outs' : 'Pitching Rank';
        
        $scope.data = parseTeamOrientationData(payload,selectedTeams,field1,field2,label1,label2);
      };
      $scope.fetchDataService = performance.getTeamOrientation;
      $scope.drawChart = function(){
        console.log($scope.data);
        var subTitle = $scope.field == 1? 'Batting and Pitching stats in selected year span':'Batting and Pitching rank in selected year span';
        drawBarChart($scope.data,'chart_div',$scope.title,subTitle);
        drawTableWithArray($scope.data,'table_div');
      }
  });


  team_module.controller('fan_following_controller', 
    function($log, $scope, performance,$location) {
      $scope.categories = [];
      $scope.fields = [];

      $scope.field = 'attendance';
      $scope.title = 'Fan following';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parseTeamPerformanceData(payload,selectedTeams,startYear,endYear,field);
      };
      $scope.fetchDataService = performance.getTeamPerformances;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawLineChart($scope.data,'chart_div',$scope.title);
        drawTable($scope.data,'table_div');
      }
  });

  team_module.controller('team_award_controller', 
    function($log, $scope, performance,$location) {
      $scope.categories = [];
      $scope.fields = [];

      $scope.field = 0;
      $scope.title = 'Achievement/Awards';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parsePlayerAttributeData(payload,'Teams',0,'Total Awards');
      };
      $scope.fetchDataService = performance.getTeamAchAward;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

  team_module.controller('age_group_controller', 
    function($log, $scope, performance,$location) {
      $scope.categories = [];
      $scope.fields = [];

      $scope.field = 'awards';
      $scope.title = 'Player Age Group';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parsePlayerAttributeData(payload,'Age Group',0,'Total');
      };
      $scope.fetchDataService = performance.getTeamPlayerAgeGroup;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });