const inquirer = require('inquirer');
const copyPaste = require('copy-paste')
const { getSavedCommandsFromFile } = require('./file');
const { displaySuccess } = require('./output');

async function getCommand(searchItems) {
  const matchedCommands = await getMatchCommands(searchItems);
  await displayListOfMatchCommands(matchedCommands);
}

async function getMatchCommands(searchItems) {
  const savedCommands = await getSavedCommandsFromFile();

  return savedCommands.filter(elt => {
    const matchTitle = searchItems.some(item => elt.title.includes(item));
    const matchCategory = searchItems.some(item => elt.category.includes(item));
    const matchKeywords = searchItems.some(item => elt.keywords.includes(item));
    const matchValue = searchItems.some(item => elt.value.includes(item));

    return matchTitle || matchCategory ||matchKeywords || matchValue;
  })
}

async function displayListOfMatchCommands(matchedCommands) {
  const command = await inquirer.prompt([
    {
      type: 'list',
      name: 'selected',
      message: 'Matched commands',
      choices: matchedCommands
    }
  ]);

  copyPaste.copy(command.selected);
  displaySuccess('Command copied to the clipboard !');
  process.exit(0);
}

module.exports = {
  getCommand
}