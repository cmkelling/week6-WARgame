class Card {
    constructor(value, name, suit) {
        this.value = value;
        this.name = name;
        this.suit = suit;
    }
}

class Deck {
    constructor() {
        this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
        var cards = [];

        for (var s = 0; s < this.suits.length; s++) {
            for (var n = 0; n < this.names.length; n++) {
                cards.push(new cards(n + 1, this.names[n], this.suits[s]));
            }
        }

        return cards;
    }
}

var myDeck = new Deck();
console.log(myDeck);

function shuffle(r) {
    for (var j, x, i = r.length; i; j = parseInt(Math.random() * i), x = r[--i], r[i] = r[j], r[j] = x);
    return r;
};

myDeck = shuffle(myDeck)

class Player {
    constructor() {
        this.player = ['Player1', 'Player2']
    }
}