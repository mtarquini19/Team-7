$(document).ready(function() {
    var $background = $("#show_bg_2");

    $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=gYo6aP2v2kURjJFrRdzO4eOvx79sGG3ngPwy2USO",
    }).then(function(data) {
        // console.log(data.hdurl);

        $background.css(
            "background-image",
            "linear-gradient(194deg, rgba(0,0,0,0.9332107843137255) 0%, rgba(0,0,0,0.21052170868347342) 100%), url(" +


            data.hdurl +
            ")"
        );
        // $('#img').append('<img src="' +  + '">');
        // console.log(data.hdurl);
    });
});