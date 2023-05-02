//Command Line Arguments
const args = process.argv;

//we're interested in working with, however, are the arguments to sum.js, so the third and fourth items in process.argv.
args.splice(0,2);

// Add The Two Numbers
let sum = Number(args[0]) + Number(args[1]);

// 
console.log(sum);

