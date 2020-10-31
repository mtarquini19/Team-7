$(document).ready(function() {
    let pageURL = $(location).attr("href");
    let queryString = window.location.search;
    console.log(queryString);
    let urlParams = new URLSearchParams(queryString);
    let search = urlParams.get('search');
    console.log(search);
    let q = search;

    $(document).ready(function() {
        $.ajax({
            METHOD: "GET",
            url: "https://images-api.nasa.gov/search?q=" + q,
        }).then(function(collection) {
            console.log(collection.collection);
            for (let i in collection.collection.items) {
                $("#result-container").append(
                    '<img class="container-img" width="300" src="' +
                    collection.collection.items[i].links[0].href +
                    '">'
                );
            }
        });
    });
})