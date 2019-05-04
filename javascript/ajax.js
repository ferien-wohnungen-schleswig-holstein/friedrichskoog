//id muss genauso heißen wie route die aufgerufen werden soll
/*
function ajax(elementId){
    var dash = '/';
    var ajaxRoute = dash.concat(elementId);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('content').innerHTML =
        this.responseText;
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", ajaxRoute, true);
    xhttp.send();
  
    removeFallbackLink(elementId);
}

function removeFallbackLink(elementId){
    var element = document.getElementById(elementId);
    element.removeAttribute("href");
}