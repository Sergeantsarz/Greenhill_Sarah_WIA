//Load google vis library  and the core chart package

google.load("visualization", "1", {packages:["corechart"]});

//Once library is loaded lets run a function.

google.setOnLoadCallback(drawChart);

//Create drawChart function

function drawChart(){
	//We will actually draw the chart
	
	//Create a data table using an array.
	
	var data = google.visualization.arrayToDataTable([
	["Task", "Hours per Day"], 
	["Northeast", 8],
	["Southeast", 5],
	["Mideast", 2],
	["Midwest", 1],
	["Southwest", 3],
	["Northwest", 7]
	]);
	
	var options ={
		title: "Percentage of US Populus Affected",
		titleTextStyle: {textStyle: {color: 'white'}},
		is3D: true,
		pieSliceText: "percentage",
		backgroundColor: '#000000', 
		legend: {textStyle: {color: 'white'}} 
		//pieStartAngle:45,
		//width:500,
		//height:500
		//legend:{position:"labeled"},
		//tooltip:{trigger:"none"}
		};
	
	
	//Create the chart variable
	var chart = new google.visualization.PieChart(document.getElementById("zombieChart"));
	
	//Draw The Chart
	chart.draw(data, options);
	
	
	}