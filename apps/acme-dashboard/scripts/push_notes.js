'use strict';

// This is an artifial example of a phase that depends on two other phases.
//
// (Most likely something like this should actually be totally outside the build
// pipeline, in some kind of deploy or publish job, so take with a grain of salt.)

console.log(`
Pushing latest build notes to the corporate version dashboard.
`);
