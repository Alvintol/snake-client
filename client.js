const { Socket } = require("dgram");
const net = require("net");
const { constants } = require('./constants')

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: constants.IP,
    port: constants.PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write('Name: AT');
    console.log('I are inside...');

    conn.setTimeout(3000);
    conn.on('timeout', () => {
      console.log('No movement. Timed Out');
      conn.end();
    });
  });

  return conn;
};



module.exports = { connect };