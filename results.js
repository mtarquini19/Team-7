let q = "videos of earth";
$(document).ready(function() {
    $.ajax({
        METHOD: "GET",
        url: "https://images-api.nasa.gov/search?q=" + q
    }).then(function(collection) {
        console.log(collection)

        let newCall = collection.collection.items[0].href;
        console.log(newCall)
        $.ajax({
            METHOD: "GET",
            url: newCall
        }).then(function(post) {

            for (let i in post) {
                const images = ["jpg", "gif", "png"]
                const videos = ["mp4", "3gp", "ogg"]

                const url = new URL(post[i])
                const extension = url.pathname.split(".")[1]

                if (images.includes(extension)) {
                    $('.container').append('<img src="' + post[i] + '">');
                } else if (videos.includes(extension)) {
                    $('.container').append('<video  ' + 'controls="' + 'control"' + 'src="' + post[i] + '">');
                }
            }
        });
    });
});