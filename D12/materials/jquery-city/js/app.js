// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked


//$(".thumb#second").on("click", function () {
//	console.log("second photo clicked!");
//	$("#big-photo").attr("src", "img/2.jpg");
//})


//$(".thumb#first").on("click", function () {
//	console.log("first photo clicked!");
//	$("#big-photo").attr("src", "img/1.jpg");

//})

//$(".thumb#third").on("click", function () {
//	console.log("first photo clicked!");
//	$("#big-photo").attr("src", "img/3.jpg");

//})

//$(".thumb#fourth").on("click", function () {
//	console.log("first photo clicked!");
//	$("#big-photo").attr("src", "img/4.jpg");

//})


// when the click event is triggered on any element within the "thumb" class, then a variable is created that tells the source of the element that was clicked. 

$(".thumb").click( function() {

		var imageSource = $(this).attr("src");
//        console.log(event, this);
        $("#big-photo").attr("src", imageSource);
    }
);