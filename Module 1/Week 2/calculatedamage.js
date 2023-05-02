const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-dorkman' },
  { type: 'yawb', value: 40 },
  { type: 'eat', target: 'horse' },
  { type: 'attack', value: 23, target: 'player-fluffykins' },
  { type: 'attack', value: 12, target: 'player-dorkman' },
]


  dragonEvents.forEach((item) => {

    if (item.type === `attack` && item.target === `player-dorkman`) {
      calculateDamage(item.value);
    }
  });
 

totalDamageOnDorkMan(dragonEvents, function (value) {
  value += value;
  console.log(`Damage is ${value}`);
});


