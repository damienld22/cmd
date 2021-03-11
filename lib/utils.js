const os = require('os');
const path = require('path');

const CATEGORIES = [
  'curl',
  'settings',
  'ssh'
];

const FILE_SAVE = path.join(os.homedir(), '.cmd');

const KEYBOARD_LAYOUT = {
  '+': 'add',
  '-': 'subtract',
  ' ': 'space',
  '&': 'shift-ampersand',
  '*': 'shift-asterisk',
  '@': 'shift-at',
  '`': 'shift-back_quote space',
  '~': '@514 space',
  '^': 'shift-circumflex space',
  '\\': 'back_slash',
  '/': 'slash',
  '{': 'shift-braceleft',
  '}': 'shift-braceright',
  '[': 'open_bracket',
  ']': 'close_bracket',
  ':': 'shift-colon',
  ',': 'semicolon',
  ';': 'comma',
  '$': 'shift-dollar',
  '€': 'alt_gr-euro_sign',
  '=': 'equals',
  '!': 'shift-exclamation_mark',
  '(': 'shift-left_parenthesis',
  ')': 'shift-right_parenthesis',
  '#': 'shift-number_sign',
  '.': 'period',
  "'": 'quote',
  '"': 'shift-quotedbl',
  '_': 'shift-underscore',
  '|': 'shift-@92',
  '?': 'shift-@47'
};

module.exports = {
  CATEGORIES,
  FILE_SAVE,
  KEYBOARD_LAYOUT
}