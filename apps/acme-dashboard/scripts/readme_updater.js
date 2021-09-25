'use strict';

// What's important is that I don't depend on upstream projects at all, I only look
// at my own project's /src folder, so if I was a phase, I would have 0 dependencies.
//
// (Note: don't actually do this, because then the "output" of this phase would be
// the root folder, which is not a thing we can cache.)
//
// More commonly, you'd have a task like "generate docs" (or API extractor), but those
// would both depend on your own project's build phase, which means they aren't much
// different than "lint" or "test" for demonstration purposes.

console.log(`
I'm now updating your project's README to include some cool stats!
`);
