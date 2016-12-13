console.log("Is this thing on?");

$("button.file").on("click", function () {
	console.log("File button works!");
	$("div.drop-down-file").toggleClass("open");

});

$("button.file").mouseleave(function () {
	$("open").toggleClass("div.drop-down-edit"); 

}); 

$("button.edit").on("click", function () {
	console.log("File button works!");
	$("div.drop-down-edit").toggleClass("open");

});
