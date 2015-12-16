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
	["Northeast", 10],
	["Southeast", 1],
	["Mideast", 1],
	["Midwest", 1],
	["Southwest", 1],
	["Northwest", 1]
	]);
	
	var options ={
		title: "Percentage of US Populus Affected",
		is3D: true,
		pieSliceText: "percentage",
		sliceVisibilityThreshold: .3,
		backgroundColor: '#000000' 
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