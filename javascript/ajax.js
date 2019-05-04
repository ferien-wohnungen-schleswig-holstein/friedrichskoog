function ajax(elementId){
  var resourceName = elementId;
  var route = 'https://github.com/ferien-wohnungen-schleswig-holstein/friedrichskoog/tree/master/html/ajax';
  var ajaxRoute = route.concat(resourceName);

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(elementId).innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", ajaxRoute, true);
  xhttp.send();
}