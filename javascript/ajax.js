function ajax360(elementId){
  var resourceName = elementId;
  var route = 'https://ferien-wohnungen-schleswig-holstein.github.io/friedrichskoog/html/ajax';
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