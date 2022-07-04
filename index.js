class Card {
    constructor(value, name, suit) {
        this.value = value;
        this.name = name;
        this.suit = suit;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    createDeck(){
        let names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let s = 0; s < this.suits.length; s++) {
            for (var n = 0; n < names.length; n++) {
                this.cards.push(new Card(names[n], suits[s], values[v]));
            };
        };

    };

    shuffleDeck(r) {
        for (var j, x, i = r.length; i; j = parseInt(Math.random() * i), x = r[--i], r[i] = r[j], r[j] = x);
    return r;

    };
}

const myDeck = new Deck();
console.log(myDeck);

class Player {
    constructor() {
        this.player = ['Player1', 'Player2']
    }
}