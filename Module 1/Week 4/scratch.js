const dog = {
  sound: "woof",
  speak: function() {
    console.log(this.sound);
  }
};

dog.sound = "🐶"
dog.speak();
