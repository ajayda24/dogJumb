var sWidth = window.innerWidth;
var sHeight = window.innerHeight;

var gameScreen = document.getElementById("game");
gameScreen.style.height = sHeight+"px";
gameScreen.style.width = sWidth+"px";

//Dog Position
var dogDiv = document.getElementById("dogDiv");
dogDiv.style.top = (sHeight-108)+"px";

//Ring Position
var ringDiv = document.getElementById("ringDiv");
ringDiv.style.left = (sWidth-(sWidth-130))+"px";
ringDiv.style.top = (sHeight-(sHeight-320))+"px";