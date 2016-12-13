

$("button").on("click", function () {
	var cityLocation = $("#city").val();
	console.log(cityLocation)
	$.getJSON("http:api.openweathermap.org/data/2.5/weather?q=" + cityLocation + "&units=imperial&apikey=e65f9122b7be17fdd67c2dc97a92f52a", function(data) {
//		 	console.log(data);
			var cityTemp = data["main"]["temp"];
			$("span.temperature").text(cityTemp);
		})

	})


	if {

	} else {
		
	}

