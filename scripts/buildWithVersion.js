const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const version = Date.now().toString();
process.env.REACT_APP_VERSION = version;
console.log('Building with version', version);

execSync('react-scripts build', { stdio: 'inherit' });

const indexPath = path.join(__dirname, '..', 'build', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
html = html.replace(/(static\/js\/[^"']+\.js)/g, `$1?v=${version}`);
html = html.replace(/(static\/css\/[^"']+\.css)/g, `$1?v=${version}`);
fs.writeFileSync(indexPath, html);
console.log('Appended version query strings');

