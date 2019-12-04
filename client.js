const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.88.149',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    conn.write("successfully connect on the server");
    conn.write('Name:LN');
    broadcast('Name');

  });
  // interpret incoming data as text


  return conn;
}

module.exports = connect;