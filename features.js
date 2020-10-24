$(document).ready(function() {
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=gYo6aP2v2kURjJFrRdzO4eOvx79sGG3ngPwy2USO"
    }).then(function(data) {
        console.log(data.hdurl);
        $('#img').append('<img src="' + data.hdurl + '">');
        console.log(data.hdurl);
    });
});