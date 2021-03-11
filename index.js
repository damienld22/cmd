const minimist = require('minimist');
const { displayError } = require('./lib/output');
const { saveCommand } = require('./lib/save');
const { getCommand } = require('./lib/get');

// Parse command line arguments
const args = minimist(process.argv.slice(2))._;

if (args.length === 0) {
  displayError('cmd needs an argument (save, search)');
  process.exit(1);
}

switch (args[0]) {
  case 'save':
    saveCommand();
    break;
  case 'get':
    if (!args[1]) {
      displayError('The "get" command need keywords');
      process.exit(1);
    }
    getCommand(args.slice(1));
    break;
  default:
    displayError(`"${args[0]}" is not a valid argument (save, search)`);
    process.exit(1);
}