class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
   this.rolls.push(pins); 
  }

  get score() {
    return this.rolls.reduce((score, roll) => {
      return score + roll;
    });
  }
}

export default BowlingGame;