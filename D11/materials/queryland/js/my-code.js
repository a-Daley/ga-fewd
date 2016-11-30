//var newTitle = prompt("What would you like to name this page?");

//$("h1").text(newTitle);

// This is how you ask the browser to turn whatever is inputting into the new H1

// var newTitle = $("input").val();

// $("h1").text(newTitle);

$("button").on("click", function() {
  var title = $("input").val();
  $("h1").text(title);
});

// $("p").css("color", "red");

$("h1").css("background-color", "yellow");