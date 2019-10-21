/* eslint-env node */
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

module.exports = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '.eslintrc.yml'), 'utf8'));
