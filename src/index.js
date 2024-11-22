// Run in the terminal from the project directory with
//   node src/index.js

// Or as
//   npm start

// Files other than src/index.js must be run using
//   node path/to/file.js

// Where `path/to/file.js` represents the path to the file to be run relative to
// the current working directory.

// The `Code Runner` VS Code Extension can be installed to add a Play button for
// JavaScript code.

// Refer to math.js and math.test.js for an example of a small test.
// More details will be covered in Unit 3, Tests.

// Run from the terminal with
//   npm test

// The `Jest` VS Code Extension can be installed so that the tests are detected
// and appear under the VS Code Testing panel.

// To silence the `.env not found. Continuing without it.` message when using
// `npm start`, create a `.env` file in the root of the project. Refer to
// `.env.sample` for details.

// replaced all of this code with my own code

const { sum } = require('./math');
console.log(sum(1, 2));
console.log(process.env.api_key);