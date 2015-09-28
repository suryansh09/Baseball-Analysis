function loadCharts(drawChart){
	google.load('visualization', '1.1', {'packages':['corechart','table','geochart','bar'],"callback": drawChart});
	google.setOnLoadCallback(function(){
		drawChart();
		global.charts_loaded = true;
	});

}

function drawLineChart(jsonData,element,title){
	var data = new google.visualization.DataTable(jsonData);
	var chart = new google.visualization.LineChart(document.getElementById(element));

	var options = {
		title: title,
		curveType: 'function',
		legend: { position: 'bottom' },
		width: '100%',
		height: 500,
	};
	chart.draw(data, options);
}

function drawBarChart(jsonData,element,title,subtitle,orientation){
	var data = new google.visualization.arrayToDataTable(jsonData);
	if(!orientation)
		orientation = 'horizontal';
	//var chart = new google.visualization.LineChart(document.getElementById(element));
	var options = {
		chart: {
			title: title,
			curveType: 'function',
			legend: { position: 'bottom' },
			subtitle: subtitle
		},
    	width: '100%',
		height: 400,
      bars: orientation // Required for Material Bar Charts.
    };
    var chart = new google.charts.Bar(document.getElementById(element));
    chart.draw(data, options);
}

function drawTable(jsonData,element){
	var data = new google.visualization.DataTable(jsonData);
	var table = new google.visualization.Table(document.getElementById(element));
	table.draw(data, { width: '100%',height: 500});
}

function drawTableWithArray(jsonData,element){
	var data = new google.visualization.arrayToDataTable(jsonData);
	var table = new google.visualization.Table(document.getElementById(element));
	table.draw(data, { width: '100%',height: 500});
}

function drawPieChart(jsonData,element,title){
	var data = new google.visualization.DataTable(jsonData);
	var geo = new google.visualization.PieChart(document.getElementById(element));

	var options = {
		title: title,
		legend: { position: 'right' },
		width: '100%',
		height:500,
		pieHole: 0.4,
	};
	geo.draw(data, options);
}


function drawPieChartWithArray(jsonData,element,title){
	var data = new google.visualization.arrayToDataTable(jsonData);
	var geo = new google.visualization.PieChart(document.getElementById(element));

	var options = {
		title: title,
		legend: { position: 'right' },
		width: '100%',
		height:500,
		pieHole: 0.4
	};
	geo.draw(data, options);
}

function drawMapWithArray(jsonData,element,title,region){
	var data = new google.visualization.arrayToDataTable(jsonData);
	var geo = new google.visualization.GeoChart(document.getElementById(element));
	var options = {};
	if(region){
		var options = {
        	region: 'US',
        	resolution: 'provinces'
		};
	}
	geo.draw(data, options);
}