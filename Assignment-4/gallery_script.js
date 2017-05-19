/////////////////////////////////////////////////////////////////
// Javascript for gallery.html                                 //
// July 28, 2016                                               //
//                                                             //
// Author: Ron Guglilmone                                      //
// School: Stanford University                                 //
// Class: CS193C                                               //
// Assignment: 4                                               //
//                                                             //
// Notes:                                                      //
//                                                             //
/////////////////////////////////////////////////////////////////

"use strict";

// Taboo global variables:
var currentPhotoIndex = 0;



// mainFunction
// receives: nothing
// returns: nothing
//
// description: this initializes the event listeners
// and all other necessary objects.
function mainFunction () {
	handleResize();
	addEventListeners();
}



// addEventListeners
// receives: nothing
// returns: nothing
//
// description: adds listeners for clicks and page
// resizing events.
function addEventListeners () {
	window.addEventListener("resize", handleResize, false);
	// Forward div:
	var forwardDiv = document.getElementById("forwardOverlay");
	forwardDiv.addEventListener("click",showNextPhoto,false);
	// Backward div:
	var backwardDiv = document.getElementById("backwardOverlay");
	backwardDiv.addEventListener("click",showPreviousPhoto,false);

}



// handleResize
// receives: nothing
// returns: nothing
//
// description: does necesary style adjustments
// to keep main div centered in the window.
function handleResize() {
	var mainDiv = document.getElementById("photoSection");
	var pageWidth = window.innerWidth;
	var pageHeight = window.innerHeight;
	var midWidth = pageWidth / 2;
	var midHeight = pageHeight / 2;
	// Given permission to hard code image size:
	var leftAlignment = midWidth - 400;
	var topAlignment = midHeight - 300;
	mainDiv.style.left = leftAlignment + "px";
	mainDiv.style.top = topAlignment + "px";
}



// showNextPhoto
// receives: nothing
// returns: nothing
//
// description: responds to a mouse click event
// by switching to the next photo.
function showNextPhoto () {
	var nextPhotoIndex = currentPhotoIndex + 1;
	// Check for run-over:
	if (nextPhotoIndex > 5) {
		nextPhotoIndex = 0;
	}
	else {
		nextPhotoIndex = nextPhotoIndex
	}
	// Get filename from array:
	var nextPhotoFilename = photoArray[nextPhotoIndex].filename;
	// Get caption from array:
	var nextCaption = photoArray[nextPhotoIndex].caption;
	// Swap new photo in:
	var photo = document.getElementById("photo");
	photo.src = nextPhotoFilename;
	// Swap new caption in:
	var caption = document.getElementById("caption");
	caption.innerHTML = nextCaption;
	// Update global index:
	currentPhotoIndex = nextPhotoIndex;
}



// showPreviousPhoto
// receives: nothing
// returns: nothing
//
// description: responds to a mouse click event
// by switching to the previous photo.  Works the 
// same as showNextPhoto (above).
function showPreviousPhoto () {
var previousPhotoIndex = currentPhotoIndex - 1;
	if (previousPhotoIndex < 0) {
		previousPhotoIndex = 5;
	}
	else {
		previousPhotoIndex = previousPhotoIndex
	}
	var previousPhotoFilename = photoArray[previousPhotoIndex].filename;
	var previousCaption = photoArray[previousPhotoIndex].caption;
	var photo = document.getElementById("photo");
	photo.src = previousPhotoFilename;
	var caption = document.getElementById("caption");
	caption.innerHTML = previousCaption;
	currentPhotoIndex = previousPhotoIndex;
}



// Contains all the image names and descriptions:
var photoArray = [
		{filename: "images/memchu.jpg",
		 caption: "Stanford Memorial Church - the church used to have an 80' bell tower, which fell in the 1906 earthquake."},
		{filename: "images/quad.jpg",
		 caption: "The Stanford Quad"},
		{filename: "images/hoop.jpg",
		 caption: "The <i>Red Hoop Fountain</i> with Green Library in the background."},
		{filename: "images/memorial-court.jpg",
		 caption: "Memorial Court (in the front of the Quad) with Rodin's <i>Burghers of Calais</i> statues."},
		{filename: "images/gates.jpg",
		 caption: "The Gates Building - home of Stanford Computer Science."},
		{filename: "images/stone-river.jpg",
		 caption: "The Stone River statue near the Cantor Arts Center (Stanford's own art museum)."},
	];