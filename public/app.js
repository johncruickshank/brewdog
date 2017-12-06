
var makeRequest = function(url, callback) {
  // create new XHR
  var request = new XMLHttpRequest();
  // open the request, passing in the HTTP request type, and the URL
  request.open("GET", url);
  // write an event listener for the request
  request.addEventListener("load", callback);
  // Go!
  request.send();
};
var requestComplete = function() {

  if (this.status !== 200) return;
  // get the data needed as a string
  var jsonString = this.responseText;
  // parse to convert it to JS object
  var beers = JSON.parse(jsonString);

  addBeers(beers);
};

var app = function(){
  var url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);
};

var addBeers = function(beers) {
  for (var beer of beers) {
    addBeer(beer);
  };
};

var addBeer = function(beer) {
  var beerUl = createBeerUl();
  var beerName = createBeerName(beer.name);
  var beerTagline = createBeerTagline(beer.tagline);
  var beerImage = createBeerImage(beer.image_url);

  appendElements(beerUl, beerName, beerTagline, beerImage);
};

var appendElements = function(beerUl, beerName, beerTagline, beerImage) {
  beerUl.appendChild(beerName);
  beerUl.appendChild(beerTagline);
  beerUl.appendChild(beerImage);

  var beers = document.querySelector("#beers");
  beers.appendChild(beerUl);
};

var createBeerUl = function() {
  var ul = document.getElementById("beer-list");
  return ul;
};

var createBeerName = function(name) {
  var nameLi = document.createElement("li-name");
  nameLi.append(name);
  return nameLi;
};

var createBeerTagline = function(tagline) {
  var tagLi = document.createElement("li-tag");
  tagLi.append(tagline);
  return tagLi;
};

var createBeerImage = function(image) {
  var imageLi = document.createElement("li");
  var pic = document.createElement("img");
  imageLi.appendChild(pic);
  pic.src = image;
  return imageLi;
};


















window.addEventListener('load', app);
