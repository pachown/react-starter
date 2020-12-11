var Ajax = {
  server : `https://api.themoviedb.org/3/movie/550?api_key=6a50a6be7a4b7f078f45c3011175c0d5`,


  readAll: function(successCB, errorCB) {
    $.ajax({
      url: Ajax.server,
      type: 'GET',
      data: {order: '`createdAt'},
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.log('failure');
      }
    });
  }
}


export default Ajax;