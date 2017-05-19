/////////////////////////////////////////////////////////////////
// Javascript for map.html                                     //
// July 29, 2016                                               //
//                                                             //
// Author: Ron Guglilmone                                      //
// School: Stanford University                                 //
// Class: CS193C                                               //
// Assignment: 4                                               //
//                                                             //
// Notes: If time permits, block for double-clicking when it   //
//        occurs over the navigation buttons.                  //
/////////////////////////////////////////////////////////////////

// Last click event locations:
var clickLocationX;
var clickLocationY;
// Last top-left corner location:
var lastLocationX;
var lastLocationY;
var isDragging = false;
// Keeps track of what image is loaded:
var currentMapSize = "medium";
// Stores relative sizes of map images.
// Each size is relative to nearest neighbor.
// Zero is set for default with medium.
var size_differences = new Array ();
size_differences["smallX"] = 746;
size_differences["smallY"] = 592;
size_differences["mediumX"] = 0;
size_differences["mediumY"] = 0;
size_differences["largeX"] = 1016;
size_differences["largeY"] = 784;
size_differences["xlX"] = 1021;
size_differences["xlY"] = 793;


// mainFunction
// receives: nothing
// returns:  nothing
//
// description: gets called on page load
function mainFunction () {
	handleResize();
	addEventListeners();
	centerImage();
}



// handleResize
// receives: nothing
// returns: nothing
//
// description: does necesary style adjustments
// to keep main div centered in the window.
function handleResize() {
	var mainDiv = document.getElementById("mapFrame");
	var pageWidth = window.innerWidth;
	var pageHeight = window.innerHeight;
	var divWidth = pageWidth - 50;
	var divHeight = pageHeight - 50;
	var leftAlignment = 25;
	var topAlignment = 25;
	mainDiv.style.left = leftAlignment + "px";
	mainDiv.style.top = topAlignment + "px";
	mainDiv.style.width = divWidth + "px";
	mainDiv.style.height = divHeight + "px";
}



// addEventListeners
// receives: nothing
// returns: nothing
//
// description: adds listeners for clicks and page
// resizing events.
function addEventListeners () {
	window.addEventListener("resize", handleResize, false);
	document.addEventListener("mousedown",handleMouseDown,false);
	document.addEventListener("mouseup",handleMouseUp,false);
	document.addEventListener("mousemove",handleMouseMove,false);
	document.addEventListener("dblclick", handleDoubleClick, false);
	addButtonListeners();
}



// addButtonListeners
// receives: nothing
// returns: nothing
//
// description: helper function for addEventListeners
function addButtonListeners () {
	var zoomPlus = document.getElementById("topZoomer");
	zoomPlus.addEventListener("click",zoomIn,false);
	var zoomMinus = document.getElementById("bottomZoomer");
	zoomMinus.addEventListener("click",zoomOut,false);
	var moveUpwards = document.getElementById("topMover");
	moveUpwards.addEventListener("click",moveUp,false);
	var moveDownwards = document.getElementById("bottomMover");
	moveDownwards.addEventListener("click",moveDown,false);
	var moveLeftwards = document.getElementById("leftMover");
	moveLeftwards.addEventListener("click",moveLeft,false);
	var moveRightwards = document.getElementById("rightMover");
	moveRightwards.addEventListener("click",moveRight,false);
}



// centerImage
// receives: nothing
// returns: nothing
//
// description: sets the map image into the center of the window.
function centerImage () {
	var width = getMapWidth();
	var height = getMapHeight();
	var pageWidth = window.innerWidth;
	var pageHeight = window.innerHeight;
	var differenceX = width - pageWidth;
	var differenceY = height - pageHeight;
	var map = document.getElementById("mapImage");
	map.style.left = -(differenceX/2) + "px";
	map.style.top = -(differenceY/2) + "px";
}



// centerToCordinate
// receives: int, int
// returns: nothing
//
// description: centers the map to a specific cordinate
// which is passed in as two ints.
function centerToCordinate (xLocation, yLocation) {
	// Get page dimensions and center:
	var pageWidth = window.innerWidth;
	var pageHeight = window.innerHeight;
	var pageCenterX = pageWidth / 2;
	var pageCenterY = pageHeight / 2;
	// Calculate how distance to new center:
	var xDifference = xLocation - pageCenterX;
	var yDifference = yLocation - pageCenterY;
	// Calculate new location of upper-left cordinates:
	var newLocationX = lastLocationX - xDifference;
	var newLocationY = lastLocationY - yDifference;
	// Place map in new centerL
	var map = document.getElementById("mapImage");
	map.style.left = newLocationX + "px";
	map.style.top = newLocationY + "px";
}



// getBox[Information]
// recieve: nothing
// return: nothing
//
// description: the following functions are taken
// from Professor Young's "map related" handout.
// They collect information about the map div.
// Height of the div, width, top "y" pixel location,
// left "x" pixel location, and a test for whether
// an event is within the map region.
function getMapHeight() {
	var map = document.getElementById("mapImage");
	return parseInt(map.style.height);
}
// getBox[Information] cont.
function getMapWidth() {
	var map = document.getElementById("mapImage");
	return parseInt(map.style.width);
}
// getBox[Information] cont.
function getMapTop() {
	var map = document.getElementById("mapImage");
	return parseInt(map.style.top);
}
// getBox[Information] cont.
function getMapLeft() {
	var map = document.getElementById("mapImage");
	return parseInt(map.style.left);
}
// getBox[Information] cont.
function inMap(x,y) {
	return (x >= getMapLeft() && x <= getMapLeft() + getMapWidth()
		&& y >= getMapTop() && y <= getMapTop() + getMapHeight());
}



// handleMouse[Event]
// receive: event
// return: nothing
//
// description: the following functions also come
// directly from Professor Young's handout I09,
// "map related".  They handle various mouse
// events that are triggered by the listeners.
function handleMouseDown(evt) {
	if (inMap(evt.clientX,evt.clientY)) {
		isDragging = true;
		clickLocationX = evt.clientX;
		clickLocationY = evt.clientY;
		lastLocationX = getMapLeft();
		lastLocationY = getMapTop();
		document.body.style.cursor = "move";
		evt.preventDefault();
	}
}
// handleMouse[Event] cont.
function handleMouseUp(evt) {
	if (isDragging) {
		var map = document.getElementById("mapImage");
		isDragging = false;
		document.body.style.cursor = "default";		
	}
}
// handleMouse[Event] cont.
function handleMouseMove(evt) {
	if (isDragging) {
		var map = document.getElementById("mapImage");
		map.style.left = lastLocationX + (evt.clientX - clickLocationX) + "px";
		map.style.top = lastLocationY + (evt.clientY - clickLocationY) + "px";
		evt.preventDefault();
	}
}



// handleDoubleClick
// receives: nothing
// returns: nothing
//
// description: when a double click event occurs
// this function re-centers the map by calling
// centerToCordinate
function handleDoubleClick (evt) {
	clickLocationX = evt.clientX;
	clickLocationY = evt.clientY;
	centerToCordinate(clickLocationX, clickLocationY);
}



// zoomIn
// receives: nothing
// returns: nothing/false
// 
// description: changes the map size from the current
// selection to a larger one unless the current selection
// is already the largest.
function zoomIn () {
	var map = document.getElementById("mapImage");
			// Check current size and change:
			if (currentMapSize == "small") {
				map.style.background = "url('images/map-m.gif')";
				map.style.width = 2047 + "px";
				map.style.height = 1589 + "px";
				var newLocationX = lastLocationX - (size_differences["smallX"]/2);
				var newLocationY = lastLocationY - size_differences["smallY"]/2;
				map.style.left = newLocationX + "px";
				map.style.top = newLocationY + "px";
				lastLocationX = newLocationX;
				lastLocationY = newLocationY;
				currentMapSize = "medium";
				return false;
			}
			else if (currentMapSize == "medium") {
				map.style.background = "url('images/map-l.gif')";
				map.style.width = 3063 + "px";
				map.style.height = 2373 + "px";
				var newLocationX = lastLocationX - (size_differences["largeX"]/2);
				var newLocationY = lastLocationY - size_differences["largeY"]/2;
				map.style.left = newLocationX + "px";
				map.style.top = newLocationY + "px";
				lastLocationX = newLocationX;
				lastLocationY = newLocationY;
				currentMapSize = "large";
				return false;
			}
			else if (currentMapSize == "large") {
				map.style.background = "url('images/map-xl.gif')";
				map.style.width = 4084 + "px";
				map.style.height = 3164 + "px";
				var newLocationX = lastLocationX - (size_differences["xlX"]/2);
				var newLocationY = lastLocationY - size_differences["xlY"]/2;
				map.style.left = newLocationX + "px";
				map.style.top = newLocationY + "px";
				lastLocationX = newLocationX;
				lastLocationY = newLocationY;
				currentMapSize = "xl";
				return false;
			}
			else if (currentMapSize == "xl") {
				return false;
			}
		}



// zoomOut
// receives: nothing
// returns: nothing/false
// 
// description: changes the map size from the current
// selection to a smaller one unless the current selection
// is already the smallest.
function zoomOut () {
	var pageWidth = window.innerWidth;
	var pageHeight = window.innerHeight;
	var map = document.getElementById("mapImage");
	// Check current size and change:
	if (currentMapSize == "small") {
		return false;
	}
	if (currentMapSize == "medium") {
		map.style.background = "url('images/map-s.gif')";
		map.style.width = 1283 + "px";
		map.style.height = 997 + "px";
		var newLocationX = lastLocationX + (size_differences["smallX"]/2);
		var newLocationY = lastLocationY + size_differences["smallY"]/2;
		map.style.left = newLocationX + "px";
		map.style.top = newLocationY + "px";
		lastLocationX = newLocationX;
		lastLocationY = newLocationY;
		currentMapSize = "small";
	}
	if (currentMapSize == "large") {
		map.style.background = "url('images/map-m.gif')";
		map.style.width = 2047 + "px";
		map.style.height = 1589 + "px";
		var newLocationX = lastLocationX + (size_differences["largeX"]/2);
		var newLocationY = lastLocationY + size_differences["largeY"]/2;
		map.style.left = newLocationX + "px";
		map.style.top = newLocationY + "px";
		lastLocationX = newLocationX;
		lastLocationY = newLocationY;
		currentMapSize = "medium";
	}
	if (currentMapSize == "xl") {
		map.style.background = "url('images/map-l.gif')";
		map.style.width = 3063 + "px";
		map.style.height = 2373 + "px";
		var newLocationX = lastLocationX + (size_differences["xlX"]/2);
		var newLocationY = lastLocationY + size_differences["xlY"]/2;
		map.style.left = newLocationX + "px";
		map.style.top = newLocationY + "px";
		lastLocationX = newLocationX;
		lastLocationY = newLocationY;
		currentMapSize = "large";
	}
	else {
		return false;
	}
}



// move[direction]
// receives: nothing
// returns: nothing
//
// description: moves the map half its width in the
// direction specified.
function moveUp () {
	var halfPageHeight = window.innerHeight/2;
	var map = document.getElementById("mapImage");
	var newLocationY = lastLocationY + halfPageHeight;
	map.style.top = newLocationY + "px";
	lastLocationY = newLocationY;

}
// Down:
function moveDown () {
	var halfPageHeight = window.innerHeight/2;
	var map = document.getElementById("mapImage");
	var newLocationY = lastLocationY - halfPageHeight;
	map.style.top = newLocationY + "px";
	lastLocationY = newLocationY;
}
// Left:
function moveLeft () {
	var halfPageWidth = window.innerWidth/2;
	var map = document.getElementById("mapImage");
	var newLocationX = lastLocationX + halfPageWidth;
	map.style.left = newLocationX + "px";
	lastLocationX = newLocationX;
}
// Right:
function moveRight () {
	var halfPageWidth = window.innerWidth/2;
	var map = document.getElementById("mapImage");
	var newLocationX = lastLocationX - halfPageWidth;
	map.style.left = newLocationX + "px";
	lastLocationX = newLocationX;
}






