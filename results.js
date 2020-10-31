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
                    '<img onclick = "fbs_click(this)" class="container-img" width="300" src="' +
                    collection.collection.items[i].links[0].href +
                    '">'
                );
            }
        });
    });
})

function fbs_click(TheImg) {
    u = TheImg.src;
    t = TheImg.getAttribute('alt');
    window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', 'toolbar=0,status=0,width=626,height=436');
    return false;
}