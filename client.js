const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.149',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    conn.write('Successfully connected to game server');
    conn.write('Name: MKL');
  });

  // conn.on('connect', () => {
  //   setInterval(function() {
  //     conn.write("Move: up");
  //   }, 50);
  // });

  return conn;
}

module.exports = connect;
// const net = require('net');

// /**
//  * Establishes connection with the game server
//  */
// const connect = function () {
//   const conn = net.createConnection({
//     host: '192.168.88.149',
//     port: 50541
//   });
//   conn.setEncoding('utf8');
//   conn.on('connect', () => {

//     conn.write("successfully connect on the server");
//     conn.write('Name: LN');

//   });
//     conn.on('connect', () => {
//       setTimeout(function() {
//     conn.write("Move: up"); }, 2000);

//     // conn.write("Move: down");
//     // conn.write("Move: left");
//     // conn.write("Move: right");

//   });
//   // interpret incoming data as text


//   return conn;
// }

// module.exports = connect;