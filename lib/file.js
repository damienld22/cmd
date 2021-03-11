const fs = require('fs');
const clui = require('clui');
const { FILE_SAVE } = require('./utils');

const Spinner = clui.Spinner;

function getSavedCommandsFromFile() {
  try {
    if (fs.existsSync(FILE_SAVE)) {
      return JSON.parse(fs.readFileSync(FILE_SAVE));
    } else {
      fs.writeFileSync(FILE_SAVE, JSON.stringify([]));
      return [];
    }
  } catch (err) {
    console.error(err);
    process.exit(3);
  }
}

function saveCommandToFile(command) {
  try {
    const countdown = new Spinner('Saving command...  ', ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷']);
    countdown.start();

    const savedCommands = getSavedCommandsFromFile();
    const newCommands = [...savedCommands, command];
    fs.writeFileSync(FILE_SAVE, JSON.stringify(newCommands));
    countdown.stop();
  } catch(err) {
    console.error(err);
    process.exit(4)
  }
}

module.exports = {
  getSavedCommandsFromFile,
  saveCommandToFile
}