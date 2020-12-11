var Ajax = {
  server : `https://api.themoviedb.org/3/movie/550?api_key=6a50a6be7a4b7f078f45c3011175c0d5`,


  readAll: function(successCB, errorCB) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", `https://api.themoviedb.org/3/movie/550?api_key=6a50a6be7a4b7f078f45c3011175c0d5`, true);
    xhttp.send();
  }
  }


export default Ajax;