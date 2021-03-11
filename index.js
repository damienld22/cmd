const minimist = require('minimist');
const { displayError } = require('./lib/error');
const { saveCommand } = require('./lib/save');

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
  default:
    displayError(`"${args[0]}" is not a valid argument (save, search)`);
    process.exit(1);
}