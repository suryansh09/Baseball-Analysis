function parseTeamPerformanceData(payload,teams,startYear,endYear,field){
  var cols=[];
  cols.push(new col('string','year'));
  for(var team in teams){
    var currentTeam = teams[team];
    cols.push(new col('number',currentTeam.name));
  }
  var fetchedTeams = payload.data;
  var year = startYear;
  var allrows = []; 
  for(var j = startYear;j<=endYear;j++){ 
    c = [];
    c.push(new v(j));
    for(var team in teams){
      var currentTeam = teams[team];
      c.push(new v(searchField(fetchedTeams,j,field,currentTeam.teamId)));
    }
    allrows.push(new rows(c));
  }
  var finalData = new graphData(cols,allrows);
  return finalData;
}

function searchField(fetchedTeams,year,field,teamId){
  for(var team in fetchedTeams){
    var currentTeam = fetchedTeams[team];
    if(currentTeam.yearId == year && currentTeam.teamId == teamId)
      return currentTeam[field];
  }
  return 0;
}

function parseSalaryData(payload){
  var cols=[];
  cols.push(new col('string','playerid'));
  cols.push(new col('number','salary'));
  
  var playerSalaries = payload.data;
  var allrows = [];
  for(var salary in playerSalaries){
    var currentSalary = playerSalaries[salary];
    var c = [];
    c.push(new v(currentSalary.playerid));
    c.push(new v(currentSalary.salary));
    allrows.push(new rows(c));
  }
  var finalData = new graphData(cols,allrows);
  console.log(finalData);
  return finalData;
}

function parseTeamOrientationData(payload,selectedTeams,field1,field2,label1,label2){
  var finalData = [];
  var cols = ['Team',label1,label2];
  finalData.push(cols);
  var teams = payload.data;
  for(var team in teams){
    var currentTeam = teams[team];
    finalData.push([currentTeam.teamId,currentTeam[field1],currentTeam[field2]]);
  }
  return finalData;
}

function parseTeamPlayingStyleData(payload,field){
  var cols=[];
  cols.push(new col('string','Style'));
  cols.push(new col('number','Number of players'));
  
  var playerStyle = payload.data;
  var r = 0,l=0,b=0;
  for(var style in playerStyle){
    var currentStyle = playerStyle[style];
    if(currentStyle[field] == 'R')
      r++;
    if(currentStyle[field] == 'L')
      l++;
    if(currentStyle[field] == 'B')
      b++;
  }
  var finalData = [];
  finalData.push(cols);
  finalData.push(['Right hander',r]);
  finalData.push(['Left hander',l]);
  finalData.push(['Both',b]);
  return finalData;
}

function parsePlayerOriginData(payload,field){
  var cols=[];
  cols.push(new col('string',field));
  cols.push(new col('number','Number of players'));
  
  var playerOrigin = payload.data;
  var finalData = [];
  finalData.push(cols);
  for(var origin in playerOrigin){
    var currentOrigin = playerOrigin[origin];
    finalData.push([currentOrigin.name,currentOrigin.value]);
  }
  return finalData;
 }

 function parsePlayerSalaryData(payload,field,label){
  var finalData = [];
  var cols = [field,'Salary'];
  finalData.push(cols);
  var teams = payload.data;
  for(var team in teams){
    var currentTeam = teams[team];
    finalData.push([''+currentTeam[field],currentTeam.salary]);
  }
  return finalData;
}

function parsePlayerAttributeData(payload,group,field,label){
  
  var playerOrigin = payload.data;
  var finalData = [];
  finalData.push([group,label]);
  for(var origin in playerOrigin){
    var currentOrigin = playerOrigin[origin];
    finalData.push([currentOrigin.name,currentOrigin.values[field]]);
  }
  return finalData;
 }

 function parsePlayerAttributeDataWins(payload,group,field,label){
  
  var playerOrigin = payload.data;
  var finalData = [];
  finalData.push([group,label]);
  for(var origin in playerOrigin){
    var currentOrigin = playerOrigin[origin];
    finalData.push([currentOrigin.name,currentOrigin.values[field]]);
  }
  return finalData;
 }


 function parseBattingManagerTeamData(payload,field,field1,field2,label1,label2){
  var finalData = [];
  var cols = [field,label1,label2];
  finalData.push(cols);
  var teams = payload.data;
  for(var team in teams){
    var currentTeam = teams[team];
    finalData.push([''+currentTeam[field],currentTeam[field1],currentTeam[field2]]);
  }
  return finalData;
}