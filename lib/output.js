const chalk = require('chalk');

function displayError(msg) {
  console.log(chalk.red(msg));
}

function displayWarning(msg) {
  console.log(chalk.yellow(msg));
}

function displaySuccess(msg) {
  console.log(chalk.green(msg));
}

module.exports = {
  displayError,
  displayWarning,
  displaySuccess
}