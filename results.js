//first function get URL
$(document).ready(function() {
    let pageURL = $(location).attr("href");
    let queryString = window.location.search;
    console.log(queryString);
    let urlParams = new URLSearchParams(queryString);
    //get url variable search = ?? 
    let search = urlParams.get('search');
    console.log(search);

    // q = variable search results
    let q = search;

    //ajax function with nasa api and q variable as query in endpoint search
    $(document).ready(function() {
        $.ajax({
            METHOD: "GET",
            url: "https://images-api.nasa.gov/search?q=" + q,
        }).then(function(collection) {
            console.log(collection.collection);
            // then for every link in the api creates a new img tag with onclick function fbs_click(this)
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

//share on facebook function with the event click on img 
function fbs_click(TheImg) {
    u = TheImg.src;
    t = TheImg.getAttribute('alt');
    window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', 'toolbar=0,status=0,width=626,height=436');
    return false;
}