let q = "galaxies";
$(document).ready(function() {
    $.ajax({
        METHOD: "GET",
        url: "https://images-api.nasa.gov/search?q=" + q
    }).then(function(collection) {
        console.log(collection.collection)
        for (let i in collection.collection.items) {

            $('.container').append('<img class="container-img" width="300" src="' + collection.collection.items[i].links[0].href + '">');

        }
    })
})