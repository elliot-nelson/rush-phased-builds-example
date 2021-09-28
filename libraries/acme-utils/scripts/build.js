'use strict';

// Because the project's build got more complicated with multiple steps, a home-grown
// build script was invented so they could pass along "--lite" to their individual scripts.

const { execSync } = require('child_process');

const lite = process.argv.includes('--lite');
const heftCommand = lite ? 'heft build --lite --clean' : 'heft test --clean';

execSync(heftCommand, { stdio: 'inherit', encoding: 'utf8' });
execSync(`node ${__dirname}/readme_updater.js`, { stdio: 'inherit', encoding: 'utf8' });
