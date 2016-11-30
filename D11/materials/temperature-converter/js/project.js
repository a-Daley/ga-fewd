
var celsius = $("#temperature").val();

$("button").on("click", function() {
//	console.log("I was clicked");
	var tempCelsius = $("#temperature").val();
//	console.log(tempInput);
	var newTemp = (tempCelsius * 9 / 5 + 32);
//	console.log(newTemp);
	$("#converted").text(newTemp);
} )

