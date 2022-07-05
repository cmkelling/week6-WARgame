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

    dealDeck() {
        for (let i =0; i < 52; i+= 2) {
            let dealtCard1 = this.cards.pop();
            player1.playerCards.push(dealtCard1);
            let dealtCard2 = this.cards.pop();
            player2.playerCards.push(dealtCard2);
        }
    }
};

class Player {
    constructor(playerName) {
        this.playerName = playerName;
        this.playerCards = [];
        this.playerScore = 0
    };

    reset() {
        this.playerCards = [];
        this.playerScore = 0;
    }
};
const player1 = new Player('playerOne');
const player2 = new Player('playerTwo');


class Board {
    start() {
        player1.reset();
        player2.reset();
        let myDeck = new Deck();
        myDeck.createDeck();
        myDeck.shuffleDeck();
        myDeck.dealDeck();
        this.rounds();
        this.scoring();
    };

    rounds() {
        for (let round = 0; round < 26; round++) {
            let playerCard1 = player1.playerCards.pop();
            let playerCard2 = player2.playerCards.pop();
            console.log(`
            War Round: ${round + 1}

            ${player1.playerName} has a ${playerCard1.name} of ${playerCard1.suit}.
            ${player2.playerName} has a ${playerCard2.name} of ${playerCard2.suit}.`
            );

            if (playerCard1.value > playerCard2.value) {
                player1.playerScore += 1;
                console.log(`${player1.playerName} is the winner of ${round + 1}.`);
            } else if (playerCard2.value > playerCard1.value) {
                player2.playerScore += 1;
                console.log(`${player2.playerName} is the winner of ${round + 1}.`);
            } else {
                player1.playerScore == 0;
                player2.playerScore == 0;

                console.log(`${round + 1} is a tie. No points awarded.`);
            };
        };
    };

    scoring() {
        let showFinalScore1 = player1.playerScore;
        let showFinalScore2 = player2.playerScore;
        console.log(`The final score for ${player1.playerName} is ${player1.playerScore}.
        The final score for ${player2.playerName} is ${player2.playerScore}.`);

        if (player1.playerScore > player2.playerScore) {
            console.log(`${player1.playerName} is the winner!`);
        } else if (player1.playerScore < player2.playerScore) {
            console.log(`${player2.playerName} is the winner!`);
        } else {
            console.log('The game is tied!');
        };
    };
};

const d = new Deck ();
console.log(d.cards);

let newBoard = new Board();
newBoard.start();