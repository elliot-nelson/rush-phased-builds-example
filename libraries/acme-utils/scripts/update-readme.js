'use strict';

// This task doesn't depend on any other projects (either upstream or self).
//
// NOTE: The "output" of this task is theoretically the project's own README, which
// actually isn't a cacheable thing because it's in the root folder, so this task
// would be a bit tricky if it was real. Probably something you run and check in
// locally only, like prettier.

console.log(`
I'm updating your project's README with some cool stats!
`);
