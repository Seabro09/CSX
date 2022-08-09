// Working with AJAX requests to request a random photo from unsplash.api


function download() {
    $.ajax({
        url: "https://source.unsplash.com/random/500x500",
        cache: false,
        xhrFields: {
            responseType:'blob'
        },
        success:function(data){
            // functionality here of prepending images and then text after
 },
        error:function(error){
            console.log(error)
        }
    })
}