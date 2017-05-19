/////////////////////////////////////////////////////////////////
// Javascript for matching.html                                //
// July 19, 2016                                               //
//                                                             //
// Author: Ron Guglilmone                                      //
// School: Stanford University                                 //
// Class: CS193C                                               //
// Assignment: 3                                               //
//                                                             //
// Notes: Sandbox for working on bugs...                       //
/////////////////////////////////////////////////////////////////



// Program Start:
function mainFunction() {
	pickRandomCards();
	addEventListeners('null','null');
}



// Taboo global variables--
// this is how we keep track
// of what the last card was:
var lastCardPlayed = 'noSuchCard';
var lastCardSubstring = '-1';
var lastCardIndex = -1;
var lastCardObject = null;
var lastCardContainer = 'containerNone';



// changeCard___
// receives: event
// returns: nothing
//
// description: this set of functions takes in an event
// handler, and changes the given card appropriately.
// Then, it causes a delay, and flips the card back.
function changeCardOne(event) {
	event.target.style.backgroundImage = "url('" +active_cards[1] + "')";
	eventObject = event.target;
	removeEventListeners();
	// Take the first char of card name
	// because names start with matching #'s:
	var string = active_cards[1];
	var subString = string.slice(0, 1);
    // Check for a match:
    if(lastCardIndex != 1 && lastCardSubstring == subString) {
    	currentCardContainer = 'containerOne';
    	setTimeout(flipToWhite, 1500, eventObject, lastCardObject);
    }
    else {
    	lastCardPlayed = string;
    	lastCardSubstring = subString;
    	lastCardIndex = 1;
    	lastCardObject = eventObject;
    	lastCardContainer = 'containerOne';
    	setTimeout(flipCardBack, 1500, eventObject);
    }
}
// It felt so good, I thought I'd do it again:
function changeCardTwo(event) {
	event.target.style.backgroundImage = "url('" +active_cards[2] + "')";
	eventObject = event.target;
	removeEventListeners();
	var string = active_cards[2];
	var subString = string.slice(0, 1);
	if(lastCardIndex != 2 && lastCardSubstring == subString) {
		currentCardContainer = 'containerTwo';
		setTimeout(flipToWhite, 1500, eventObject, lastCardObject, currentCardContainer);
	}
	else {
		lastCardPlayed = string;
		lastCardSubstring = subString;
		lastCardIndex = 2;
		lastCardObject = eventObject;
		lastCardContainer = 'containerTwo';
		setTimeout(flipCardBack, 1500, eventObject);
	}
}
// And again...
function changeCardThree(event) {
	event.target.style.backgroundImage = "url('" +active_cards[3] + "')";
	eventObject = event.target;
	removeEventListeners();
	var string = active_cards[3];
	var subString = string.slice(0, 1);
	if(lastCardIndex != 3 && lastCardSubstring == subString) {
		currentCardContainer = 'containerThree';
		setTimeout(flipToWhite, 1500, eventObject, lastCardObject, currentCardContainer);
	}
	else {
		lastCardPlayed = string;
		lastCardSubstring = subString;
		lastCardIndex = 3;
		lastCardObject = eventObject;
		lastCardContainer = 'containerThree';
		setTimeout(flipCardBack, 1500, eventObject);
	}
}
// And again...
function changeCardFour(event) {
	event.target.style.backgroundImage = "url('" +active_cards[4] + "')";
	eventObject = event.target;
	removeEventListeners();
	var string = active_cards[4];
	var subString = string.slice(0, 1);
	if(lastCardIndex != 4 && lastCardSubstring == subString) {
		currentCardContainer = 'containerFour';
		setTimeout(flipToWhite, 1500, eventObject, lastCardObject, currentCardContainer);
	}
	else {
		lastCardPlayed = string;
		lastCardSubstring = subString;
		lastCardIndex = 4;
		lastCardObject = eventObject;
		lastCardContainer = 'containerFour';
		setTimeout(flipCardBack, 1500, eventObject);
	}
}
// And again...
function changeCardFive(event) {
	event.target.style.backgroundImage = "url('" +active_cards[5] + "')";
	eventObject = event.target;
	removeEventListeners();
	var string = active_cards[5];
	var subString = string.slice(0, 1);
	if(lastCardIndex != 5 && lastCardSubstring == subString) {
		currentCardContainer = 'containerFive';
		setTimeout(flipToWhite, 1500, eventObject, lastCardObject, currentCardContainer);
	}
	else {
		lastCardPlayed = string;
		lastCardSubstring = subString;
		lastCardIndex = 5;
		lastCardObject = eventObject;
		lastCardContainer = 'containerFive';
		setTimeout(flipCardBack, 1500, eventObject);
	}
}
// Okay, that's enough.
function changeCardSix(event) {
	event.target.style.backgroundImage = "url('" +active_cards[6] + "')";
	eventObject = event.target;
	removeEventListeners();
	var string = active_cards[6];
	var subString = string.slice(0, 1);
	if(lastCardIndex != 6 && lastCardSubstring == subString) {
		currentCardContainer = 'containerSix';
		setTimeout(flipToWhite, 1500, eventObject, lastCardObject, currentCardContainer);
	}
	else {
		lastCardPlayed = string;
		lastCardSubstring = subString;
		lastCardIndex = 6;
		lastCardObject = eventObject;
		lastCardContainer = 'containerSix';
		setTimeout(flipCardBack, 1500, eventObject);
	}
}



// flipCardBack
// receives: div refrence
// returns: nothing
//
// description: used to flip the cards back face-down.
function flipCardBack(cardObject) {
	activeCard = cardObject;
	activeCard.style.backgroundImage = "url('back.png')";
	addEventListeners('null','null');
}



// flipToWhite
// receives: div refrence, div refrence, int
// returns: nothing
//
// description: used to take a match off the table.
function flipToWhite(cardObject, secondCardObject, currentCardPlace) {
	currentCardContainer = currentCardPlace;
	activeCard = cardObject;
	otherActiveCard = secondCardObject;
	activeCard.style.backgroundImage = "url('clear.png')";
	otherActiveCard.style.backgroundImage = "url('clear.png')";
	addEventListeners(currentCardContainer, lastCardContainer);
}



// addEventListeners
// receives: string, string
// returns: nothing
//
// description: matches input strings to their card space when
// called from flipToWhite so that cards out of play will not
// be fitted with event listeners.
function addEventListeners(outgoingOne, outgoingTwo) {

	if(outgoingOne != 'containerOne' && outgoingTwo != 'containerOne') {
		var cardOne = document.getElementById("cardContainerOne");
		cardOne.addEventListener("click",changeCardOne,false);
	}
	if(outgoingOne != 'containerTwo' && outgoingTwo != 'containerTwo') {
		var cardTwo = document.getElementById("cardContainerTwo");
		cardTwo.addEventListener("click",changeCardTwo,false);
	}
	if(outgoingOne != 'containerThree' && outgoingTwo != 'containerThree') {
		var cardThree = document.getElementById("cardContainerThree");
		cardThree.addEventListener("click",changeCardThree,false);
	}
	if(outgoingOne != 'containerFour' && outgoingTwo != 'containerFour') {
		var cardFour = document.getElementById("cardContainerFour");
		cardFour.addEventListener("click",changeCardFour,false);
	}
	if(outgoingOne != 'containerFive' && outgoingTwo != 'containerFive') {
		var cardFive = document.getElementById("cardContainerFive");
		cardFive.addEventListener("click",changeCardFive,false);
	}
	if(outgoingOne != 'containerSix' && outgoingTwo != 'containerSix') {
		var cardSix = document.getElementById("cardContainerSix");
		cardSix.addEventListener("click",changeCardSix,false);
	}
}



// Turns all event listeners off:
function removeEventListeners() {

	var cardOne = document.getElementById("cardContainerOne");
	cardOne.removeEventListener("click",changeCardOne,false);

	var cardTwo = document.getElementById("cardContainerTwo");
	cardTwo.removeEventListener("click",changeCardTwo,false);

	var cardThree = document.getElementById("cardContainerThree");
	cardThree.removeEventListener("click",changeCardThree,false);

	var cardFour = document.getElementById("cardContainerFour");
	cardFour.removeEventListener("click",changeCardFour,false);

	var cardFive = document.getElementById("cardContainerFive");
	cardFive.removeEventListener("click",changeCardFive,false);

	var cardSix = document.getElementById("cardContainerSix");
	cardSix.removeEventListener("click",changeCardSix,false);
}



// Maps ints to cards:
var card_map = new Array()
card_map[1]='1clubs.png';
card_map[2]='1hearts.png';
card_map[3]='2clubs.png';
card_map[4]='2hearts.png';
card_map[5]='3clubs.png';
card_map[6]='3hearts.png';



// Remembers which cards are drawn:
var drawn_cards = new Array()
drawn_cards[1]=false;
drawn_cards[2]=false;
drawn_cards[3]=false;
drawn_cards[4]=false;
drawn_cards[5]=false;
drawn_cards[6]=false;



// Remembers which cards are used:
var used_cards = new Array()
// 1 of hearts and spades:
used_cards[1]=false;
// 2 of hearts and spades:
used_cards[2]=false;
// 3 of hearts and spades:
used_cards[3]=false;



// Stores randomized cards:
var active_cards = new Array()
active_cards[1]='';
active_cards[2]='';
active_cards[3]='';
active_cards[4]='';
active_cards[5]='';
active_cards[6]='';



// Basically does what it says:
function pickRandomCards() {
	var counter = 1;
	while (counter < 7) {
		randomNumber = getRandomInt(1,6);
		if(drawn_cards[randomNumber] == false){
			active_cards[counter] = card_map[randomNumber];
			drawn_cards[randomNumber] = true;
			counter = counter + 1;
		}
		else {
			continue;
		}
	}
}



// getRandomInt
// receives: int, int
// returns: int
//
// description: from Mozilla Foundation, Math.random()
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


// mysteryFunction
// receives: nothing
// returns: nothing
//
// description: this does absolutely nothing.
// I just put it here in case anybody actually
// reads this code someday.
function mysteryFunction() {
	var lonelyBoy = -1;
	while (time != money) {
		continue;
	}
}



