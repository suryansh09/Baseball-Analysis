var global = {
	end_points:{
		base_url:"http://localhost:8080/",
		player_search : "searchPlayer",
		manager_search : "searchManager",
		records : "getNextRecord",
		database_details : "getDatabaseDetails",
		teams:{
			performance:"getTeamPerformance",
			orientation:"getTeamOrientation",
			playing_style:"getTeamPlayingStyle",
			getTeamAchievementAward:"getTeamAchievementAward",
			getTeamAgeGroup:"getTeamAgeGroup"
		},
		players:{
			origin : "getPlayerOrigin",
			player_birth_country_stats : "getPlayerBirthCountryStats",
			player_birth_state_stats : "getPlayerBirthStateStats",
			player_birth_city_stats : "getPlayerBirthCityStats",
			player_weight_group : "getPlayerWeightGroup",
			player_height_group : "getPlayerHeightGroup",
			pitching_weight_group : "getPitchingWeightGroup",
			pitching_height_group : "getPitchingHeightGroup",
			searchBatter : "searchBatter",
			searchPitcher : "searchPitcher",
			getBattingManagerTeamDetails : "getBattingManagerTeamDetails",
			getPitchingManagerTeamDetails : "getPitchingManagerTeamDetails",
			getPlayerAgeAndExperiance: "getPlayerAgeAndExperiance",
			getPlayerAgeAndExperiancePit: "getPlayerAgeAndExperiancePit"
		},
		salaries:{
			players : "getPlayerSalaries",
			playerSalaries: "getPlayerSalariesOverTheYears"
		},
		managers:{
			manager_age_maturity : "getManagerAgeMaturity",
			getManagerMaturityAwards : "getManagerMaturityAwards",
			getManagerLoyalty : "getManagerLoyalty",
			getManagerTeamPerformace : "getManagerTeamPerformace",
			getPlayerManager : "getPlayerManager"
		}
	},
	charts_loaded:false,
	leagues:[{icon:'<img src="images/team_logos/nl.png"/>',name:'National League',lgId:'NL',ticked:true},
			{icon:'<img src="images/team_logos/al.png"/>',name:'American League',lgId:'AL',ticked:true}],
	teams:[
		{icon:'<img src="images/team_logos/Toronto_Blue_Jays.svg"/>',teamId:'TOR',	lgId:'AL',	name:'Toronto Blue Jays'},
		{icon:'<img src="images/team_logos/Milwaukee_Brewers_Logo.svg"/>',teamId:'MIL',	lgId:'NL',	name:'Milwaukee Brewers'},
		{icon:'<img src="images/team_logos/New_York_Mets.svg"/>',teamId:'NYN',	lgId:'NL',	name:'New York Mets'},
		{icon:'<img src="images/team_logos/Philadelphia_Phillies.svg"/>',teamId:'PHI',	lgId:'NL',	name:'Philadelphia Phillies'},
		{icon:'<img src="images/team_logos/Houston_Astros_Logo.svg"/>',teamId:'HOU',	lgId:'NL',	name:'Houston Astros'},
		{icon:'<img src="images/team_logos/CHA.svg"/>',teamId:'DET',	lgId:'AL',	name:'Detroit Tigers'},
		{icon:'<img src="images/team_logos/Oakland_athl_primlogo.svg"/>',teamId:'OAK',	lgId:'AL',	name:'Oakland Athletics'},
		{icon:'<img src="images/team_logos/Chicago_Cubs_Logo.svg"/>',teamId:'CHA',	lgId:'AL',	name:'Chicago Cubs'},
		{icon:'<img src="images/team_logos/Tampa_Bay_Rays.svg"/>',teamId:'TBA',	lgId:'AL',	name:'Tampa Bay Devil Rays'},
		{icon:'<img src="images/team_logos/CHA.svg"/>',teamId:'CAL',	lgId:'AL',	name:'California Angels'},
		{icon:'<img src="images/team_logos/Cincinnati_Reds_Logo.svg"/>',teamId:'CIN',	lgId:'NL',	name:'Cincinnati Reds'},
		{icon:'<img src="images/team_logos/St._Louis_Cardinals_Logo.svg"/>',teamId:'SLN',	lgId:'NL',	name:'St. Louis Cardinals'},
		{icon:'<img src="images/team_logos/Seattle_Mariners_logo.svg"/>',teamId:'SEA',	lgId:'AL',	name:'Seattle Mariners'},
		{icon:'<img src="images/team_logos/CHA.svg"/>', teamId:'CHN',	lgId:'NL',	name:'Chicago White Sox'},
		{icon:'<img src="images/team_logos/CHA.svg"/>',teamId:'ANA',	lgId:'AL',	name:'Anaheim Angels'},
		{icon:'<img src="images/team_logos/San_Francisco_Giants_Logo.svg"/>',teamId:'SFN',	lgId:'NL',	name:'San Francisco Giants'},
		{icon:'<img src="images/team_logos/Kansas_City_Royals.svg"/>',teamId:'KCA',	lgId:'AL',	name:'Kansas City Royals'},
		{icon:'<img src="images/team_logos/Minnesota_Twins_Logo.svg"/>',teamId:'MIN',	lgId:'AL',	name:'Minnesota Twins'},
		{icon:'<img src="images/team_logos/NYA.svg"/>', teamId:'NYA',	lgId:'AL',	name:'New York Yankees'},
		{icon:'<img src="images/team_logos/MiamiMarlins.svg"/>',teamId:'MIA',	lgId:'NL',	name:'Miami Marlins'},
		{icon:'<img src="images/team_logos/Los_Angeles_Angels_of_Anaheim.svg"/>',teamId:'LAN',	lgId:'NL',	name:'Los Angeles Dodgers'},
		{icon:'<img src="images/team_logos/Tampa_Bay_Rays.svg"/>',teamId:'TBA',	lgId:'AL',	name:'Tampa Bay Rays'},
		{icon:'<img src="images/team_logos/Texas_Rangers.svg"/>',teamId:'TEX',	lgId:'AL',	name:'Texas Rangers'},
		{icon:'<img src="images/team_logos/Montreal_Expos_Logo.svg"/>',teamId:'MON',	lgId:'NL',	name:'Montreal Expos'},
		{icon:'<img src="images/team_logos/Milwaukee_Brewers_Logo.svg"/>',teamId:'ML4',	lgId:'AL',	name:'Milwaukee Brewers'},
		{icon:'<img src="images/team_logos/Arizona_Diamondbacks_Logo.svg"/>',teamId:'ARI',	lgId:'NL',	name:'Arizona Diamondbacks'},
		{icon:'<img src="images/team_logos/Colorado_Rockies_logo.svg"/>',teamId:'COL',	lgId:'NL',	name:'Colorado Rockies'},
		{icon:'<img src="images/team_logos/Pittsburgh_Pirates_MLB_Logo.svg"/>',teamId:'PIT',	lgId:'NL',	name:'Pittsburgh Pirates'},
		{icon:'<img src="images/team_logos/Washington-Nationals-Logo.svg"/>',teamId:'WAS',	lgId:'NL',	name:'Washington Nationals'},
		{icon:'<img src="images/team_logos/CLE.svg"/>', teamId:'CLE',	lgId:'AL',	name:'Cleveland Indians'},
		{icon:'<img src="images/team_logos/Los_Angeles_Angels_of_Anaheim.svg"/>',teamId:'LAA',	lgId:'AL',	name:'Los Angeles Angels of Anaheim'},
		{icon:'<img src="images/team_logos/CHA.svg"/>',teamId:'FLO',	lgId:'NL',	name:'Florida Marlins'},
		{icon:'<img src="images/team_logos/CHA.svg"/>',teamId:'SDN',	lgId:'NL',	name:'San Diego Padres'},
		{icon:'<img src="images/team_logos/Atlanta_Braves.svg"/>',teamId:'ATL',	lgId:'NL',	name:'Atlanta Braves'},
		{icon:'<img src="images/team_logos/Baltimore_Orioles_Logo.svg"/>',teamId:'BAL',	lgId:'AL',	name:'Baltimore Orioles'}]
	};