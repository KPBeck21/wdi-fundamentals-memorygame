console.log("Up and running!");

var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png"
	}

	];

var cardsInPlay = []
cardsInPlay.push(cards[cardId].rank);
console.log(cardImage);
console.log(suit);

var checkForMatch = function () {
if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}
}

var flipCard = function () {
	this.getAttribute('data-id');
	console.log("user flipped" + cards[cardId].rank);
}
var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
	cardElement.addEventListener('click', flipCard);
	game-board.appendChild(cardElement);
	}
}
var cardElement = document.createElement('img');
card.Element.setAttribute('src', 'images/back.png');


	this.setAttribute(src);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert ("You found a match!");
	} else {
	alert ("Sorry, try again.");
	}
checkForMatch();
}

createBoard();
