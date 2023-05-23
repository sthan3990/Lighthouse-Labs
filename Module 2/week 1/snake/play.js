// import Node's net lib 
const net = require('net');
const { setupInput } = require('./input');
const { connect } = require('./client');

//const { Game } = require('./src/Game')
//const { UserInterface } = require('./src/UserInterface')
//const { RemoteInterface } = require('./src/RemoteInterface')
// const game = new Game(new UserInterface(), new RemoteInterface())


console.log("Connecting ...");

setupInput(connect());

// Begin game
//game.start()

