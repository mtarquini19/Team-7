$(document).ready(function () {
	var $background = $("#show_bg_2");

	$.ajax({
		url:
			"https://api.nasa.gov/planetary/apod?api_key=gYo6aP2v2kURjJFrRdzO4eOvx79sGG3ngPwy2USO",
	}).then(function (data) {
		// console.log(data.hdurl);

		$background.css(
			"background-image",
			"radial-gradient(circle, rgba(0,0,0,0.87718837535014) 0%, rgba(0,0,0,0.8547794117647058) 100%),   url(" +
				data.hdurl +
				")"
		);
		// $('#img').append('<img src="' +  + '">');
		// console.log(data.hdurl);
	});
});
