# rush-phased-builds-example

This repo is a minimal example of a rush monorepo, used as a test bed for phased builds.

The `main` branch is buildable with current rush (`rush install && rush build`).

The `phased` branch (see [#1](https://github.com/elliot-nelson/rush-phased-builds-example/pull/1)) can be checked out to attempt building with a version of rushstack that implements the spec described in [rushstack#2300](https://github.com/microsoft/rushstack/issues/2300).

## Projects

Project           | Description
----------------  | -----------
@acme/utils       | An example library
@acme/dashboard   | An example webpack/react app
@acme/classic-rig | An example rig (for rush-project.json, mostly)

## Phases

Phase Name              | Phase Dependencies
----------------------- | ------------------
`_phase:build`          | upstream `_phase:build`
`_phase:lint`           | self `_phase:build`
`_phase:test`           | self `_phase:build`
`_phase:readme_updater` | n/a
`_phase:push_notes`     | self `_phase:build`, self `_phase:readme_updater`, upstream `_phase:readme_updater`

![Phase Dependencies](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/elliot-nelson/rush-phased-builds-example/main/phases.uml)

## Test cases

The projects and phases above should cover the following test cases (expand as necessary).

1. Basic "build->test" phases -- can downstream project build while upstream project tests?
2. The (clunky) `readme_updater` phase doesn't depend on anything, does the scheduler handle that?
3. The (clunky) `push_notes` phase depends on multiple tasks (both upstream and self), does the scheduler handle that?
4. The `@acme/utils` project doesn't implement `push_notes` phase -- what's that look like?
5. Projects like rigs often won't include any/all build phases -- do they mess up phased builds?
