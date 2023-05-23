const net = require('net');

// allows you to capture user input 
const stdin = process.stdin;

const conn = net.createConnection({
  host: `localhost`,
  port: 8080 
});
 
let date = new Date();
let mm = date.getMonth();
let yy = date.getFullYear();
let day = date.getDay();

let dateString = `${mm}/${day}/${yy}`;

conn.setEncoding(`utf8`);

conn.on(`data`, (data) => {
  console.log(`Server says: `, data);
});

conn.on(`connect`, () => {
  conn.write(`Welcome, you are connected! ${dateString}`);
});

stdin.on(`data`, (data) => {
  client.write(data);
});


