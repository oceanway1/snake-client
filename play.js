const connect = require('./client');
const setupInput = require('./input');

console.log('Connecting ...');
connect();

setupInput();
// const connect = require('./client');
// console.log('Connecting ...');
// connect();
// // const net = require('net');
// const handleUserInput = function (key) {
//   if (key === '\u0003') {
//     process.exit();
//   }
//   // if (key && key.ctrl && key.name == 'c') process.exit();
//   // process.exit();
// }
// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();

//   stdin.on('data', handleUserInput)

//   // setTimeout(() => {
//   //   process.exit();
//   // },5000)

//   return stdin;
// }
// setupInput();

// // /**
// //  * Establishes connection with the game server
// //  */
// // const connect = function() {
// //   const conn = net.createConnection({ 
// //     host: '192.168.88.149',
// //     port: 50541
// //   });
// //   // interpret incoming data as text
// //   conn.setEncoding('utf8'); 
// //   conn.on('connect', () => {
// //     conn.write("successfully connect on the server");
// //     conn.write('Name:LN');
// //   });
// //   return conn;
// // }

// // console.log('Connecting ...');
// // connect();

