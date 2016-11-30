
$("#click-me").on("click", function () {
//	console.log("I was clicked");
	var currentAge = $("#age").val();
//	console.log(currentAge);
	var deathAge = $("#max-age").val();
//	console.log(deathAge);
	var favDrink = $("#item").val();
//	console.log(favDrink);
	var drinksPerDay = $("#num-per-day").val();
	console.log(drinksPerDay);
	var drinksLifetime = ((deathAge - currentAge) * 365) * drinksPerDay; 
	$("#solution").text(drinksLifetime);
	$("#drink").text(favDrink);


})