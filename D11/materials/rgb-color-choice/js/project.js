
$("#color-button").on("click", function() {
//	console.log("i waz clicked.")
	var redInput = $("#red").val();
	var greenInput = $("#green").val();
	var blueInput = $("#blue").val();


	var colorCode = "rgb(" + redInput + "," + greenInput + "," + blueInput + ")";
console.log(colorCode);

$("#wrapper").css("background-color", colorCode);
$("p#colorful-text").text(colorCode);

} )