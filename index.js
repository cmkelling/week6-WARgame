class Card {
    constructor(name, suit, value) {
        this.value = value;
        this.name = name;
        this.suit = suit;
    };
};

class Deck {
    constructor() {
        this.cards = [];
    };

    createDeck(){
        let names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let s = 0; s < suits.length; s++) {
            for (var n = 0; n < names.length; n++) {
                this.cards.push(new Card(names[n], suits[s], values[n]));
            };
        };

    };

    shuffleDeck() {
        let location1, location2, tmp;
       for (let i = 0; i < 1000; i++) {
           location1 = Math.floor((Math.random() * this.cards.length));
           location2 = Math.floor((Math.random() * this.cards.length));
           tmp = this.cards[location1];
           this.cards[location1] = this.cards[location2];
           this.cards[location2] = tmp;
       };

    };
};
var myDeck = new Deck();
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    };
};

class Board {
    constructor() {
        this.players = [];
        this.cardsInMiddle = [];
    };

    start(playerOne, playerTwo) {
        this.players.push(new Player(playerOne));
        this.players.push(new Player(playerTwo));
        let myDeck = new Deck();
        myDeck.createDeck();
        myDeck.shuffleDeck();
        this.players[0].playerCards = myDeck.cards.slice(0, 26);
        this.players[1].playerCards = myDeck.cards.slice(26, 52);
    };
};

let gameBoard = new Board;
gameBoard.start('one', 'two');
console.log(gameBoard.players);
console.log(myDeck);