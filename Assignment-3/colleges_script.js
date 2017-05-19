/////////////////////////////////////////////////////////////////
// Javascript for colleges_page.html                           //
// July 16, 2016                                               //
//                                                             //
// Author: Ron Guglilmone                                      //
// School: Stanford University                                 //
// Class: CS193C                                               //
// Assignment: 3                                               //
//                                                             //
// Notes:  If time permits, block out table div so that        //
//         it doesn't fold out after searching.  Also,         //
//         convert numbers to currency and test for proper     //
//         input values.  Portions of this implementation      //
//         are modeled after John Howard's work, namely        //
//         the if-statement search structure.                  //
/////////////////////////////////////////////////////////////////



// buildTestTable
// receives: an array of data
// returns: nothing
//
// description: builds a string of HTML to display a table
// with all college data passed in as an array, posts HTML
// inside of a div which is already on colleges_page.html

function buildTable() {
// Schools and info that the user requested:
var siftedArray = searchTheDatabase();
// String with all HTML needed for table:
var tableHTML = '';
// Div in the static html where table will appear:
var tableDiv = document.getElementById("testTable");
// Start tag:
var tableStartTag = '<table class="resultsTable">';
// Top row:
var tableHeader = '<tr><td class="tableTitleName">Name</td>' 
				  + '<td class="tableTitle">SAT High</td>' 
				  + '<td class="tableTitle">SAT Low</td>' 
				  + '<td class="tableTitle">Tuition</td></tr>';
// Content:
var tableContent = generateTableContent(siftedArray);
// End tag:
var tableEndTag = '</table>';
// Assemble table pieces and post to page:
tableHTML = tableStartTag + tableHeader + tableContent + tableEndTag;
tableDiv.innerHTML = tableHTML;

event.preventDefault(event);
return false;
}



// searchTheDatabase
// receives: nothing
// returns: array
//
// description: sorts out just the schools that the user
// is interested in seeing, and returns an array with just
// these schools.

function searchTheDatabase () {
// array to be returned:
var returnArray = new Array();
// form object from our html document:
var theForm = document.forms["searchInformation"];
// String, either 'public', 'private', or 'either':
var publicPrivate = publicPrivateOrBoth(theForm);
var maximumTuition = parseInt( theForm.maxTuition.value );
var highSAT = parseInt( theForm.maxSAT.value );
var lowSAT = parseInt( theForm.minSAT.value );
// Data for private schools:
var privateArray = new Array(
	{name: "Stanford University", nickname: "Stanford", ownership: "private", SATh: 1570, SATl: 1380, tuition: 44757},
	{name: "University of San Francisco", nickname: "USF", ownership: "private", SATh: 1270, SATl: 1070, tuition: 41450},
	{name: "Santa Clara University", nickname: "SCU", ownership: "private", SATh: 1380, SATl: 1190, tuition: 43812},
	{name: "Mills College", nickname: "Mills College", ownership: "private", SATh: 1250, SATl: 1040, tuition: 42918}
	);
// Data for public schools:
var publicArray = new Array(
	{name: "University of California, Berkeley", nickname: "UC Berkeley", ownership: "public", SATh: 1500, SATl: 1250, tuition: 13844},
	{name: "University of California, Santa Cruz", nickname: "UC Santa Cruz", ownership: "public", SATh: 1280, SATl: 1000, tuition: 13398},
	{name: "San Francisco State University", nickname: "SFSU", ownership: "public", SATh: 1110, SATl: 880, tuition: 6468},
	{name: "San Jose State University", nickname: "SJSU", ownership: "public", SATh: 1160, SATl: 880, tuition: 9496},
	{name: "Sonoma State University", nickname: "Sonoma State", ownership: "public", SATh: 1090, SATl: 880, tuition: 7276},
	{name: "California State University, East Bay", nickname: "CalState East Bay", ownership: "public", SATh: 1010, SATl: 800, tuition: 6550, room: 6435}
	);
// Data for both types of school:
var eitherArray = new Array(
	{name: "Stanford University", nickname: "Stanford", ownership: "private", SATh: 1570, SATl: 1380, tuition: 44757},
	{name: "University of California, Berkeley", nickname: "UC Berkeley", ownership: "public", SATh: 1500, SATl: 1250, tuition: 13844},
	{name: "University of California, Santa Cruz", nickname: "UC Santa Cruz", ownership: "public", SATh: 1280, SATl: 1000, tuition: 13398},
	{name: "San Francisco State University", nickname: "SFSU", ownership: "public", SATh: 1110, SATl: 880, tuition: 6468},
	{name: "San Jose State University", nickname: "SJSU", ownership: "public", SATh: 1160, SATl: 880, tuition: 9496},
	{name: "Sonoma State University", nickname: "Sonoma State", ownership: "public", SATh: 1090, SATl: 880, tuition: 7276},
	{name: "California State University, East Bay", nickname: "CalState East Bay", ownership: "public", SATh: 1010, SATl: 800, tuition: 6550, room: 6435},
	{name: "University of San Francisco", nickname: "USF", ownership: "private", SATh: 1270, SATl: 1070, tuition: 41450},
	{name: "Santa Clara University", nickname: "SCU", ownership: "private", SATh: 1380, SATl: 1190, tuition: 43812},
	{name: "Mills College", nickname: "Mills College", ownership: "private", SATh: 1250, SATl: 1040, tuition: 42918}
	);
// Send data to be sifted:
if (publicPrivate == 'public') {
	returnArray = siftTheArray(publicArray, maximumTuition, highSAT, lowSAT);
}
else if (publicPrivate == 'private') {
	returnArray = siftTheArray(privateArray, maximumTuition, highSAT, lowSAT);
}
else if (publicPrivate == 'either') {
	returnArray = siftTheArray(eitherArray, maximumTuition, highSAT, lowSAT);
}
// Return sifted data:
return returnArray;
}



// siftTheArray
// receives: array, int, int, int
// returns: array
//
// description: takes an array of data, maximum tuition int,
// maximum SAT int, and minimum SAT int, then it sifts the data
// down and returns a smaller array which only contains the
// entries of interest.

function siftTheArray(dataArray, maxTuition, maxSAT, minSAT) {
// Initialize some variables:
var returnArray = new Array();
var index = 0;

maxTuition = ( isNaN(maxTuition) )
                     ? -1
                     : maxTuition;
    maxSAT = ( isNaN(maxSAT) )
                     ? -1
                     : maxSAT;
    minSAT = ( isNaN(minSAT) )
                     ? -1
                     : minSAT;


// Loop through the data and sift:
for( var n = 0; n < dataArray.length; n++ ) {
	if( maxTuition > 0 ) {
		if( maxTuition < dataArray[n].tuition ) {
			continue;
		}
	}
	if( maxSAT > 0 ) {
		if( maxSAT < dataArray[n].SATh ) {
			continue;
		}
	}
	if( minSAT > 0 ) {
		if( minSAT > dataArray[n].SATl ) {
			continue;
		}
	}
	returnArray[index++] = dataArray[n];
}
return returnArray;
}



// publicPrivateOrNeither
// receives: form object
// returns: string
//
// description: helper function for buildTable
// will determine whether the user wants to see
// private schools, public schools, or both.

function publicPrivateOrBoth (theForm) {
	var returnValue = 'public';
	// Assign string values to radio options:
	var value_array = new Array();
	value_array["publicSchool"]='public';
	value_array["privateSchool"]='private';
	value_array["eitherSchool"]='either';
	// Check buttons to determine type:
	var workingValue = theForm.elements["schoolType"];
	for(var n = 0; n < workingValue.length; n++) {
		if(workingValue[n].checked) {
			returnValue = value_array[workingValue[n].value];
			break;
		}
	}
	return returnValue;
}



// generateTableContent
// receives: an array of data
// returns: a string of html
//
// description:  takes an array of college data and
// parses it into a string of HTML code.  Each row
// has alternating bg color.

function generateTableContent (inputDataArray) {
	// String to be returned:
	returnHTMLString = "";
	// Iterate through array, generating html for each row:
	for( var n = 0; n < inputDataArray.length; n++) {
		if (n % 2 == 0) {
			backgroundColor = 'oddRows';
		}
		else {
			backgroundColor = 'evenRows';
		}
		returnHTMLString += generateTableRow(inputDataArray[n], backgroundColor);
	}
	return returnHTMLString;
}



// generateTableRow
// receives: a data object and a string
// returns: a string of html
//
// description: helper function for generateTableContent
// builds one single row, and classes the background
// color appropriately based on the input string.

function generateTableRow (inputDataObject, backgroundColor) {
	var schoolName = inputDataObject.nickname;
	var schoolSatHigh = inputDataObject.SATh;
	var schoolSatLow = inputDataObject.SATl;
	var schoolTuition = inputDataObject.tuition;
	var returnHTMLString = "";
	if (backgroundColor == 'evenRows') {
		returnHTMLString = '<tr class="evenRows"><td class="contentTD">' 
						   +schoolName +'</td><td class="contentTD">' 
						   +schoolSatHigh +'</td><td class="contentTD">' 
						   +schoolSatLow +'</td><td class="contentTD">' 
						   +schoolTuition +'</td></tr>';
	}
	else {
		returnHTMLString = '<tr><td class="contentTD">' 
						   +schoolName +'</td><td class="contentTD">' 
						   +schoolSatHigh +'</td><td class="contentTD">' 
						   +schoolSatLow +'</td><td class="contentTD">' 
						   +schoolTuition +'</td></tr>';
	}
	return returnHTMLString;
}


