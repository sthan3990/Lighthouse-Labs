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
    conn.write("Name: SNK");

    // setTimeout(50);

    // conn.write("Move: Up");

    // setTimeout(50);

    // conn.write("Move: Down");

    // setTimeout(50);

    // conn.write("Move: Left");

    // setTimeout(50);

    // conn.write("Move: Right");

  });

  return conn;
};


connect();

module.exports = { connect };
