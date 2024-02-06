const bird = {
  name: "Eliza",
  type: "Budgie",
  hungerScale: 5, // Scale from 0 (full) to 10 (starving)
  isHappy: function () {
    if (this.hungerScale <= 3) {
      return true;
    } else {
      return false;
    }
  },

  eat: function () {
    if (this.hungerScale === 0) {
      // At first I forgot to put in "===" and my code didn't work properly without it.
      console.log(`${this.name} is full and can't eat more!`);
    } else {
      this.hungerScale -= 1; // subtracts 1 from hungerScale
      console.log(`Nom nom nom nom nom!`);
    }
  },
};

bird.eat();
console.log(bird.isHappy());

bird.eat();
console.log(bird.isHappy()); // I had to recall the function again in order to obtain different results.
