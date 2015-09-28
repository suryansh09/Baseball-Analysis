var team_module = angular.module('widget_module', ["team_service","records_service"]);

team_module.controller('widget_controller', 
    function($log, $scope, performance,$location) {
      $scope.global = global;
      $scope.showLoading = false;
      if(!$scope.selector){
        $scope.selector = 'team';
      }
      $scope.changeDisplay = function(field){
        if($scope.payload){
          console.log(field);
          $scope.parseData($scope.payload,$scope.selectedTeams,$scope.startYear,$scope.endYear,field);
          $scope.field =field;
          if(global.charts_loaded){
            $scope.drawChart();
          }else{
            loadCharts($scope.drawChart);
          } 
        }   
      }
      if(global.query){
        $location.search(global.query);
      }
      var query = $location.search();
      if(query.endYear){
        $scope.endYear = parseInt(query.endYear);
      }else{
        $scope.endYear = 2014
      }
      if(query.startYear){
        $scope.startYear = parseInt(query.startYear);
      }else{
        $scope.startYear = 2014
      }

      $scope.selectedTeams = [];

      $scope.onSelectionChange = function(payload,teams,startYear,endYear){
          $scope.selectedTeams = teams;
          $scope.startYear = startYear;
          $scope.endYear = endYear;
          $scope.payload = payload;
          $scope.changeDisplay($scope.field);
      };
    
  });

team_module.controller('records_controller', 
    function($log, $scope, records,$location,$sce,$interval) {
      $scope.index= Math.floor((Math.random()*100)+1);
      $scope.getNextRecord = function(){
        console.log($scope.index);
        var promise = records.getNextRecord($scope.index);
        promise.then(
          function(payload) {
            $scope.text = $sce.trustAsHtml(payload.data.record);
            console.log(payload);
          },  
          function(errorPayload) {
            console.log('failure loading '+errorPayload);
          }); 
        $scope.index =  $scope.index + 1;

      };
      $scope.getNextRecord();
      $scope.text = $sce.trustAsHtml("Keep an eye on this space for interesing records");

      // $scope.stop = $interval(function() {
      //       $scope.getNextRecord();
      //     }, 30000);
  });

