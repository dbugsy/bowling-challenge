import BowlingGame from '../src/BowlingGame';

describe(BowlingGame, () => {
  const bowlingGame = new BowlingGame();

  it('plays a gutter game', () => {
    const gutterGameScore = 0;
    roll(0, 20);
    expect(bowlingGame.score()).toEqual(gutterGameScore);
  })

  const roll = (pins, numberOfRolls) => {
    for (let roll = 0; roll < numberOfRolls; roll++) {
      bowlingGame.roll(pins);
    }
  }
});