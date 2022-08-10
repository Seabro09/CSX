$.ajax({
    method: 'GET',
    url: 'https://picsum.photos/list',
    success: function (result) {
        console.log(result);
    },
    error: function (err) {
        // if any errors occur during the process you can check out the
        // the error by logging the 'err' argument
    }
});
