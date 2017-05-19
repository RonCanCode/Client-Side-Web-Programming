/////////////////////////////////////////////////////////////////
// Javascript for problem-1-ajax.html                          //
// August 8, 2016                                              //
//                                                             //
// Author: Ron Guglilmone                                      //
// School: Stanford University                                 //
// Class: CS193C                                               //
// Assignment: 5                                               //
//                                                             //
// Notes: Modeled after lecture examples.                      //
/////////////////////////////////////////////////////////////////

// Taboo global var:
var requestObj = null;



// getTheWeather
// receives: nothing
// returns: nothing
//
// description: when "Get Weather" is clicked,
// this function makes the relevent calls to the
// open weather API.
function getTheWeather () {
	var workingZipCode = document.getElementById("zipCode").value;
	var resultsBox = document.getElementById("weatherResultsBox");
	var weatherURL = `http://api.openweathermap.org/data/2.5/weather?zip=` + 
	workingZipCode
	+ `,us&units=imperial&APPID=a2fc2039197fa83cf7633d5243003422`;
	requestObj = new XMLHttpRequest();
	requestObj.addEventListener("load",handleResponse,false);
	requestObj.open('GET', weatherURL, true);
	requestObj.send(null); 
}



// handleResponse
// receives: nothing
// returns: nothing
//
// description: gets called when the weather
// server reponds.
function handleResponse () {
	if (requestObj.readyState == 4) {
		if (requestObj.status == 200) {

			var weatherObject = JSON.parse(requestObj.responseText);
			var temperature = weatherObject.main.temp;
			var name = weatherObject.name;
			document.getElementById("weatherResultsBox").innerHTML += name + ' ' + temperature + '\n';
		}
	}
}



// clearTheText
// receives: nothing
// returns: nothing
//
// description: empties the result space.
function clearTheText () {
	document.getElementById("weatherResultsBox").innerHTML = '';
}
