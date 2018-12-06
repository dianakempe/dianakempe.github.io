//. 1. Grab our HTML element

var ctx = document.getElementById("myChart").getContext("2d");

//. 2. Build the Chart

var myChart = new Chart(ctx, {
	type: "pie",
	data: {
		labels: ["Big Sean", "Ricky Alvarez", "Pete Davidson", "Mac Miller"],
		datasets: [{
			backgroundColor: [
				"red",
				"blue",
				"green",
				"purple",
			],



			data: [ 2,1,7,10]
		}] 
    },  
    options: {
        title: {
            display: true,
            text: "Which ex do people prefer?"
        } 
    } 
}); 



