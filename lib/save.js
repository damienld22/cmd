const inquirer = require('inquirer');
const { displayWarning } = require('./error');
const { CATEGORIES } = require('./utils');
const { saveCommandToFile } = require('./file');

async function saveCommand() {
  const command = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Name of the command'
    },
    {
      type: 'list',
      name: 'category',
      message: 'Category',
      choices: CATEGORIES
    },
    {
      type: 'input',
      name: 'keywords',
      message: 'Keywords (separated by commas)',
      default: ''
    },
    {
      type: 'input',
      name: 'value',
      message: 'Command'
    }
  ]);

  // Exit command if field is missing
  handleRequiredFields(command);

  // Save command to file
  saveCommandToFile(command);

}

function handleRequiredFields(command) {
  if (command.title.length === 0) {
    displayWarning('The title field is required');
    process.exit(2);
  }

  if (command.value.length === 0) {
    displayWarning('The command field is required');
    process.exit(2);
  }
}

module.exports = {
  saveCommand
}