const os = require('os');
const path = require('path');

const CATEGORIES = [
  'curl',
  'settings',
  'ssh'
];

const FILE_SAVE = path.join(os.homedir(), '.cmd');

module.exports = {
  CATEGORIES,
  FILE_SAVE
}