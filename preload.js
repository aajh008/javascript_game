
schedule("window", preloadImages);

var imageArray = [];
var imageObjects = [];
var currImage = 0;
	



function preloadImages()
{
	var loadingMessage = document.getElementById("loadingMessage");
	var loadingMessageP = loadingMessage.getElementsByTagName("p")[0];
	
	if (currImage >= imageArray.length)
	{
		loadingMessageP.innerHTML = "<strong>DONE!</strong>";
		
		var buttonStart = document.createElement("input");
		buttonStart.type = "image";
		buttonStart.src = "img/button_start.gif";
		buttonStart.onclick = ready;
		loadingMessage.appendChild(buttonStart);
	}
	else
	{
		imageObjects[currImage] = new Image();
		imageObjects[currImage].onload = preloadImages;
		imageObjects[currImage].src = imageArray[currImage] + "?" + Math.random();
		
		loadingMessageP.innerHTML = "Loading image <strong>" + (currImage + 1) + "</strong> of <strong>" + imageArray.length + "</strong>";

		var loadingBar = loadingMessage.getElementsByTagName("div")[1];
		loadingBar.style.width = Math.ceil((currImage + 1) / imageArray.length * 100) + "%";

		currImage++;
	}
	
	return true;
};




function ready()
{
	var stage = document.getElementById("stage");
	stage.className = "ready";
	
	var splash = document.getElementById("splash");
	splash.className = "ready";
	
	initBunnies();
	
	return true;
};