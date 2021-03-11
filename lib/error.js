const chalk = require('chalk');

function displayError(msg) {
  console.log(chalk.red(msg));
}

function displayWarning(msg) {
  console.log(chalk.yellow(msg));
}

module.exports = {
  displayError,
  displayWarning
}