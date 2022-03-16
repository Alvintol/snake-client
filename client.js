const { Socket } = require("dgram");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write('Name: AT');
    console.log('You are inside me...');
    // conn.write('Move: up');
    // conn.write('Move: left');
    // conn.write('Move: up');
    // conn.write('Move: left');
  });
  

  conn.setTimeout(3000);
  conn.on('timeout', () => {
    console.log('game timeout');
    conn.end();
  });
  return conn;
};



module.exports = { connect };