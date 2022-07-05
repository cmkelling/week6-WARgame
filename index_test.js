const expect = chai.expect

describe('Deck', function () {
    it('contains cards', () => {
        const deck = new Deck();
        expect(deck.cards).to.have.lengthOf(0);
    });

    it('creates deck', () => {
        // create new instance of deck
        // call createDeck
        // expect 52 cards in deck
        // Array.every expect that the element is instanceOf Card
    }); 

    it('shuffles deck', () => {
        // create new array of cards in order
        // call deck.shuffleDeck
        // expect deck.cards is not deep equal to the array from line 17
    })
});

describe('Player', function () {
    it('initializes player', () => {
        // new Player
        // expect score is 0
        // playerCards is length 0
    })
}); 

describe('Board', function () {
    it('starts game', () => {
        // create new board
        // board.start
        // expect playerCards to be length 0
        // expect player1.score not 0
    })
}); 