console.log("This is working now");

$("ul#hamburger").on("click", function () {
	console.log("I just clicked");
	$("div.drop-down").toggleClass("open");

});