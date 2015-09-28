var playersControllers = angular.module('players_controller', ["players_service"]);

playersControllers.config(['$routeProvider',
  function($routeProvider) {
   $routeProvider.
      when('/country', {
        templateUrl: 'html/widget.html',
        controller : 'player_origin_country',
        reloadOnSearch: false
      }).
      when('/state', {
        templateUrl: 'html/widget.html',
        controller : 'player_origin_state',
        reloadOnSearch: false
      }).
      when('/city', {
        templateUrl: 'html/widget.html',
        controller : 'player_origin_city',
        reloadOnSearch: false
      }).
      when('/physical_attributes_batting_weight', {
        templateUrl: 'html/widget.html',
        controller : 'player_batting_weight_group_controller',
        reloadOnSearch: false
      }).
      when('/physical_attributes_batting_height', {
        templateUrl: 'html/widget.html',
        controller : 'player_batting_height_group_controller',
        reloadOnSearch: false
      }).
      when('/physical_attributes_pitching_weight', {
        templateUrl: 'html/widget.html',
        controller : 'player_pitching_weight_group_controller',
        reloadOnSearch: false
      }).
      when('/physical_attributes_pitching_height', {
        templateUrl: 'html/widget.html',
        controller : 'player_pitching_height_group_controller',
        reloadOnSearch: false
      }).
      when('/batting_manager_team', {
        templateUrl: 'html/widget.html',
        controller : 'batting_manager_team_controller',
        reloadOnSearch: false
      }).
      when('/pitching_manager_team', {
        templateUrl: 'html/widget.html',
        controller : 'pitching_manager_team_controller',
        reloadOnSearch: false
      }).
      when('/player_experiance', {
        templateUrl: 'html/widget.html',
        controller : 'player_experiance_controller',
        reloadOnSearch: false
      }).
      when('/player_experiance_pit', {
        templateUrl: 'html/widget.html',
        controller : 'player_experiance_pit_controller',
        reloadOnSearch: false
      })

      // .
      // when('/city', {
      //   templateUrl: 'html/players.html'
      // }).
      // when('/school', {
      //   templateUrl: 'html/salaries.html'
      // }).
      // when('/country', {
      //   templateUrl: 'html/support.html'
      // })
  }]);

playersControllers.controller('player_origin_country', 
    function($log, $scope, origin,$location) {
      $scope.categories = [{link:'country',label:'Country',active:true},
                          {link:'state',label:'State'}];
      $scope.fields = [];
      $scope.title = 'Player birth country';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parsePlayerOriginData(payload,'Country');
      };
      $scope.fetchDataService = origin.getPlayerBirthCountryStats;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawMapWithArray($scope.data,'chart_div',$scope.title);
        drawTableWithArray($scope.data,'table_div');
      }
  });

playersControllers.controller('player_origin_state', 
    function($log, $scope, origin,$location) {
      $scope.categories = [{link:'country',label:'Country'},
                          {link:'state',label:'State',active:true}];
      $scope.fields = [];
      $scope.title = 'Player birth state';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parsePlayerOriginData(payload,'State');
      };
      $scope.fetchDataService = origin.getPlayerBirthStateStats;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawMapWithArray($scope.data,'chart_div',$scope.title,'US');
        drawTableWithArray($scope.data,'table_div');
      }
  });

playersControllers.controller('player_physical_attributes_controller', 
    function($log, $scope, origin,$location) {
      $scope.categories = [{link:'country',label:'Country'},
                          {link:'state',label:'State',active:true}];
      $scope.fields = [];
      $scope.title = 'Player weight group';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parsePlayerOriginData(payload,'State');
      };
      $scope.fetchDataService = origin.getPlayerWeightGroup;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

playersControllers.controller('player_batting_weight_group_controller', 
    function($log, $scope, origin,$location) {
      $scope.categories = [{link:'physical_attributes_batting_weight',label:'Batting weight group',active:true},
                          {link:'physical_attributes_batting_height',label:'Batting height group'},
                          {link:'physical_attributes_pitching_weight',label:'Pitching weight group'},
                          {link:'physical_attributes_pitching_height',label:'Pitching height group'}];
      $scope.fields = [{field:0,label:'Players'},
      {field:1,label:'Runs'},
      {field:2,label:'Homeruns'}];
      $scope.field = 0;
      $scope.title = 'Player weight group';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parsePlayerAttributeData(payload,'Weight (lb)',field,$scope.fields[field].label);
      };
      $scope.fetchDataService = origin.getPlayerWeightGroup;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

playersControllers.controller('player_batting_height_group_controller', 
    function($log, $scope, origin,$location) {
      $scope.categories = [{link:'physical_attributes_batting_weight',label:'Batting weight group'},
                          {link:'physical_attributes_batting_height',label:'Batting height group',active:true},
                          {link:'physical_attributes_pitching_weight',label:'Pitching weight group'},
                          {link:'physical_attributes_pitching_height',label:'Pitching height group'}];
      $scope.fields = [{field:0,label:'Players'},
      {field:1,label:'Runs'},
      {field:2,label:'Homeruns'}];
      $scope.field = 0;
      $scope.title = 'Player height group';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parsePlayerAttributeData(payload,'Height (in)',field,$scope.fields[field].label);
      };
      $scope.fetchDataService = origin.getPlayerHeightGroup;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });


playersControllers.controller('player_pitching_weight_group_controller', 
    function($log, $scope, origin,$location) {
      $scope.categories = [{link:'physical_attributes_batting_weight',label:'Batting weight group'},
                          {link:'physical_attributes_batting_height',label:'Batting height group'},
                          {link:'physical_attributes_pitching_weight',label:'Pitching weight group',active:true},
                          {link:'physical_attributes_pitching_height',label:'Pitching height group'}];
      $scope.fields = [{field:0,label:'Players'},
      {field:1,label:'Strikeouts'},
      {field:2,label:'Shutouts'}];
      $scope.field = 0;
      $scope.title = 'Player weight group';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parsePlayerAttributeData(payload,'Weight (lb)',field,$scope.fields[field].label);
      };
      $scope.fetchDataService = origin.getPlayerWeightGroup;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

playersControllers.controller('player_pitching_height_group_controller', 
    function($log, $scope, origin,$location) {
      $scope.categories = [{link:'physical_attributes_batting_weight',label:'Batting weight group'},
                          {link:'physical_attributes_batting_height',label:'Batting height group'},
                          {link:'physical_attributes_pitching_weight',label:'Pitching weight group'},
                          {link:'physical_attributes_pitching_height',label:'Pitching height group',active:true}];
      $scope.fields = [{field:0,label:'Players'},
      {field:1,label:'Strikeouts'},
      {field:2,label:'Shutouts'}];
      $scope.field = 0;
      $scope.title = 'Player height group';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        $scope.data = parsePlayerAttributeData(payload,'Height (in)',field,$scope.fields[field].label);
      };
      $scope.fetchDataService = origin.getPlayerHeightGroup;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

playersControllers.controller('batting_manager_team_controller', 
    function($log, $scope, origin, $location) {
      $scope.selector = 'person'
      $scope.fetchSearchDataService = origin.searchBatter;
      $scope.categories = [{link:'batting_manager_team',label:'Batting',active:true},
                          {link:'pitching_manager_team',label:'Pitching'}];
      $scope.fields = [{field:'yearId',label:'Year',active:true},
                        {field:'teamId',label:'Teams'},
                        {field:'managerName',label:'Manager'}
                        ];

      $scope.field = 'yearId';
      $scope.title='Batting performance';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        console.log(payload);
        $scope.field = field;
        $scope.data = parseBattingManagerTeamData(payload,$scope.field,'runs','homeRuns','Runs','Homeruns');
      };

      $scope.fetchDataService = origin.getBattingManagerTeamDetails;
      $scope.drawChart = function(){
        drawBarChart($scope.data,'chart_div',$scope.title,'','vertical');
        drawTableWithArray($scope.data,'table_div');
      }
  });

playersControllers.controller('pitching_manager_team_controller', 
    function($log, $scope, origin, $location) {
      $scope.selector = 'person'
      $scope.fetchSearchDataService = origin.searchPitcher;
      $scope.categories = [{link:'batting_manager_team',label:'Batting'},
                          {link:'pitching_manager_team',label:'Pitching',active:true}];
      $scope.fields = [{field:'yearId',label:'Year',active:true},
                        {field:'teamId',label:'Teams'},
                        {field:'managerName',label:'Manager'}
                        ];

      $scope.field = 'yearId';
      $scope.title='Batting performance';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        console.log(payload);
        $scope.field = field;
        $scope.data = parseBattingManagerTeamData(payload,$scope.field,'strikeouts','shutouts','Strikeouts','Shutouts');
      };

      $scope.fetchDataService = origin.getPitchingManagerTeamDetails;
      $scope.drawChart = function(){
        drawBarChart($scope.data,'chart_div',$scope.title,'','vertical');
        drawTableWithArray($scope.data,'table_div');
      }
  });

playersControllers.controller('player_experiance_controller', 
    function($log, $scope, origin,$location) {
       $scope.categories = [{link:'player_experiance',label:'Batting',active:true},
                          {link:'player_experiance_pit',label:'Pitching'}];
       $scope.fields = [{field:0,label:'Run Scored',active:true},
                          {field:1,label:'At Bats'},
                          {field:2,label:'Hits'},
                          {field:3,label:'Homeruns'},
                          {field:4,label:'Strikeouts'},
                          {field:5,label:'Caught Stealing'}
                        ];
      $scope.field=0;
      $scope.title = 'Age and Experience';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
       $scope.data = parsePlayerAttributeData(payload,'Age Group',field,$scope.fields[field]);
      };
      $scope.fetchDataService = origin.getPlayAgeAndExperiance;
      $scope.drawChart = function(){
         console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

playersControllers.controller('player_experiance_pit_controller', 
    function($log, $scope, origin,$location) {
       $scope.categories = [{link:'player_experiance',label:'Batting'},
                          {link:'player_experiance_pit',label:'Pitching',active:true}];
       $scope.fields = [{field:0,label:'Run Allowed',active:true},
                          {field:1,label:'Complete Games'},
                          {field:2,label:'Shutouts'},
                          {field:3,label:'Homeruns Allowed'}
                        ];

      $scope.field=0;
      $scope.title = 'Age and Experience';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
       $scope.data = parsePlayerAttributeData(payload,'Age Group',field,$scope.fields[field]);
      };
      $scope.fetchDataService = origin.getPlayAgeAndExperiancePit;
      $scope.drawChart = function(){
         console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

// playersControllers.controller('player_origin_city', 
//     function($log, $scope, origin,$location) {
//       $scope.categories = [{link:'county',label:'Country'},
//                           {link:'state',label:'State'},
//                           {link:'city',label:'City',active:true}];
//       $scope.fields = [];
//       $scope.title = 'Player birth city';
//       $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
//         $scope.data = parsePlayerOriginData(payload,'City');
//       };
//       $scope.fetchDataService = origin.getPlayerBirthCityStats;
//       $scope.drawChart = function(){
//         console.log($scope.data);
//         drawMapWithArray($scope.data,'chart_div',$scope.title,'US');
//         drawTableWithArray($scope.data,'table_div');
//       }
//   });