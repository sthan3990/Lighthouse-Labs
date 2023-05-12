
const takeUntil = require('../takeuntil');

const data2 = [1, 2, 5, 7, 2];

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

