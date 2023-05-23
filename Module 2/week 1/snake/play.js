

// import Node's net lib 
const net = require('net');

//const { Game } = require('./src/Game')
//const { UserInterface } = require('./src/UserInterface')
//const { RemoteInterface } = require('./src/RemoteInterface')
// const game = new Game(new UserInterface(), new RemoteInterface())

const { setupInput } = require('./input');
const { connect } = require('./client');

console.log("Connecting ...");

setupInput(connect());

// Begin game
//game.start()

