import BowlingGame from "../src/BowlingGame";

describe(BowlingGame, () => {
  let bowlingGame;

  beforeEach(() => {
    bowlingGame = new BowlingGame();
  });

  it("plays a gutter game", () => {
    const gutterGameScore = 0;
    roll(0, 20);

    expect(bowlingGame.score).toEqual(gutterGameScore);
  });

  it("score is 20 after twenty ones", () => {
    const expectedScore = 20;
    roll(1, 20);

    expect(bowlingGame.score).toEqual(expectedScore);
  });

  const roll = (pins, numberOfRolls) => {
    for (let roll = 0; roll < numberOfRolls; roll++) {
      bowlingGame.roll(pins);
    }
  };
});