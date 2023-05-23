const net = require("net");

const ipAddress = `localhost`;
const ipPort = `8080`;

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: ipAddress,// IP address here,
    port:  ipPort // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {

    console.log('Successfully connected to the game server');

    conn.write("Name: SNK");

    // setTimeout(50);


    // setTimeout(50);

    // conn.write("Move: Down");

    // setTimeout(50);

    // conn.write("Move: Left");

    // setTimeout(50);

    // conn.write("Move: Right");

  });

    //event handler that receives data from the server to the client
    conn.on('data', (data) => {
      console.log('Server says: ', data)
    });
  
    // interpret incoming data as text
    conn.setEncoding('utf8');
    

  return conn;
};


connect();

module.exports = { connect };
