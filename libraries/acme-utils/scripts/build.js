'use strict';

// Because the project's build got more complicated with multiple steps, a home-grown
// build script was invented.
//
// This script is the equivalent of a "build" script like:
//
//   heft test && node scripts/update-readme.js

const { execSync } = require('child_process');

const lite = process.argv.includes('--lite');
const heftCommand = lite ? 'heft build --lite --clean' : 'heft test --clean';

// heft build
execSync(heftCommand, { stdio: 'inherit', encoding: 'utf8' });

// update-readme
execSync(`node ${__dirname}/update-readme.js`, { stdio: 'inherit', encoding: 'utf8' });
