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
    conn.write("successfully connect on the server");
    conn.write('Name:LN');
  });
  return conn;
}

console.log('Connecting ...');
connect();

// const net = require('net');

// /**
//  * Establishes connection with the game server
//  */
// const connect = function () {
//   const conn = net.createConnection({
//     host: '192.168.88.149',
//     port: 50541
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8');
//   conn.on('data', (data) => {
//     console.log('NEW DATA', data)

//     for (const user of connections) {
//       user.write(data)

//       return conn;
//     }
//   });
//   console.log('Connecting ...')
//   connect();
// }


// const { connect } = require('./client');
// console.log('Connecting ...');
// connect();