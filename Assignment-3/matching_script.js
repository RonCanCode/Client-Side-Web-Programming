//////////////////////////////////////////////////////////////////
// Javascript for matching.html                                 //
// July 19, 2016                                                //
//                                                              //
// Author: Ron Guglilmone                                       //
// School: Stanford University                                  //
// Class: CS193C                                                //
// Assignment: 3                                                //
//                                                              //
// Notes: Added feature so that once a pair of cards is matched //
//        they will no longer have event listeners associated   //
//        with them.  Seems stable in Safari, Chrome, Firefox.  //
//                                                              //
//////////////////////////////////////////////////////////////////



// Program Start:
function mainFunction() {
	pickRandomCards();
	addEventListeners();
}



// Taboo global variables--
// this is how we keep track
// of what the last card was:
var lastCardPlayed = 'noSuchCard';
var lastCardSubstring = '-1';
var lastCardIndex = -1;
var lastCardObject = document.getElementById("cardContainerOne");



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
    	setTimeout(flipToWhite, 1500, eventObject, lastCardObject);
    }
    else {
    	lastCardPlayed = string;
    	lastCardSubstring = subString;
    	lastCardIndex = 1;
    	lastCardObject = eventObject;
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
		setTimeout(flipToWhite, 1500, eventObject, lastCardObject);
	}
	else {
		lastCardPlayed = string;
		lastCardSubstring = subString;
		lastCardIndex = 2;
		lastCardObject = eventObject;
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
		setTimeout(flipToWhite, 1500, eventObject, lastCardObject);
	}
	else {
		lastCardPlayed = string;
		lastCardSubstring = subString;
		lastCardIndex = 3;
		lastCardObject = eventObject;
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
		setTimeout(flipToWhite, 1500, eventObject, lastCardObject);
	}
	else {
		lastCardPlayed = string;
		lastCardSubstring = subString;
		lastCardIndex = 4;
		lastCardObject = eventObject;
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
		setTimeout(flipToWhite, 1500, eventObject, lastCardObject);
	}
	else {
		lastCardPlayed = string;
		lastCardSubstring = subString;
		lastCardIndex = 5;
		lastCardObject = eventObject;
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
		setTimeout(flipToWhite, 1500, eventObject, lastCardObject);
	}
	else {
		lastCardPlayed = string;
		lastCardSubstring = subString;
		lastCardIndex = 6;
		lastCardObject = eventObject;
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
	addEventListeners();
}



// flipToWhite
// receives: div refrence, div refrence
// returns: nothing
//
// description: used to take a match off the table.
function flipToWhite(cardObject, secondCardObject) {
	activeCard = cardObject;
	otherActiveCard = secondCardObject;
	removeFromPlay(activeCard, otherActiveCard);
	activeCard.style.backgroundImage = "url('clear.png')";
	otherActiveCard.style.backgroundImage = "url('clear.png')";
	addEventListeners();
}



// removeFromPlay
// receives: card object, card object
// returns: nothing
//
// description: updates the matched_cards Array
function removeFromPlay(firstCard, secondCard) {
	var cardOne = document.getElementById("cardContainerOne");
	var cardTwo = document.getElementById("cardContainerTwo");
	var cardThree = document.getElementById("cardContainerThree");
	var cardFour = document.getElementById("cardContainerFour");
	var cardFive = document.getElementById("cardContainerFive");
	var cardSix = document.getElementById("cardContainerSix");

	if (firstCard == cardOne) {
		matched_cards[1] = true;
	}
	if (firstCard == cardTwo) {
		matched_cards[2] = true;
	}
	if (firstCard == cardThree) {
		matched_cards[3] = true;
	}
	if (firstCard == cardFour) {
		matched_cards[4] = true;
	}
	if (firstCard == cardFive) {
		matched_cards[5] = true;
	}
	if (firstCard == cardSix) {
		matched_cards[6] = true;
	}
	if (secondCard == cardOne) {
		matched_cards[1] = true;
	}
	if (secondCard == cardTwo) {
		matched_cards[2] = true;
	}
	if (secondCard == cardThree) {
		matched_cards[3] = true;
	}
	if (secondCard == cardFour) {
		matched_cards[4] = true;
	}
	if (secondCard == cardFive) {
		matched_cards[5] = true;
	}
	if (secondCard == cardSix) {
		matched_cards[6] = true;
	}
}



// addEventListeners
// receives: nothing
// returns: nothing
//
// description: only activates event listeners for cards that are
// currently in play.  Once a card is in the matched_cards array
// it will no longer be included in the game.
function addEventListeners() {
	if (matched_cards[1] == false) {
		var cardOne = document.getElementById("cardContainerOne");
		cardOne.addEventListener("click",changeCardOne,false);
	}
	if (matched_cards[2] == false) {
		var cardTwo = document.getElementById("cardContainerTwo");
		cardTwo.addEventListener("click",changeCardTwo,false);
	}
	if (matched_cards[3] == false) {
		var cardThree = document.getElementById("cardContainerThree");
		cardThree.addEventListener("click",changeCardThree,false);
	}
	if (matched_cards[4] == false) {
		var cardFour = document.getElementById("cardContainerFour");
		cardFour.addEventListener("click",changeCardFour,false);
	}
	if (matched_cards[5] == false) {
		var cardFive = document.getElementById("cardContainerFive");
		cardFive.addEventListener("click",changeCardFive,false);
	}
	if (matched_cards[6] == false) {
		var cardSix = document.getElementById("cardContainerSix");
		cardSix.addEventListener("click",changeCardSix,false);
	}
}



// removeEventListeners
// receives: nothing
// returns: nothing
//
// description: does what it says and nothing more.
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



// Remembers which cards are matched:
var matched_cards = new Array()
matched_cards[1]=false;
matched_cards[2]=false;
matched_cards[3]=false;
matched_cards[4]=false;
matched_cards[5]=false;
matched_cards[6]=false;



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