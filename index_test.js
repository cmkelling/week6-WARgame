const expect = chai.expect

describe('Deck', function () {
    it('contains cards', () => {
        const deck = new Deck();
        expect(deck.cards).to.have.lengthOf(0);
    });

    it('creates deck', () => {
        const deck = new Deck();
        createDeck();
        expect(deck.cards).to.have.lengthOf(52);
    }); 

    it('shuffles deck', () => {
        createDeck();
        console.log(deck.cards);
        shuffleDeck();
        expect(deck.cards).to.not.deep.equal.deck;
        // expect deck.cards is not deep equal to the array
    });
});

describe('Player', function () {
    it('initializes player', () => {
        const playerTest = new Player('Test');
        expect(playerTest.playerScore).to.equal(0);
        expect(playerTest.playerCards).to.have.lengthOf(0)
        // expect score is 0
        // playerCards is length 0
    })
}); 

describe('Board', function () {
    it('starts game', () => {
        const newBoard = new Board();
        newBoard.start();
        expect(newBoard.playerCards).to.have.lengthOf(0);
        expect(player1.playerScore).to.not.equal(0);
        // expect playerCards to be length 0
        // expect player1.score not 0
    });
}); 