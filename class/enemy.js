const {Character} = require('./character');

class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Your code here 
  }

  setPlayer(player) {
    this.player = player;
  }

  randomMove() {
    // Your code here 
  }

  takeSandwich() {
    // Your code here 
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Your code here 
  }

  applyDamage(amount) {
    // Your code here 
  }

  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Your code here 
  }

  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);
  }
}

module.exports = {
  Enemy
};
