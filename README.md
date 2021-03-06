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
`_phase:compile`        | upstream `_phase:compile`
`_phase:lint`           | self `_phase:compile`
`_phase:test`           | self `_phase:compile`
`_phase:update-readme ` | n/a
`_phase:push-notes`     | self `_phase:compile`, self `_phase:update-readme`, upstream `_phase:update-readme`

![Phase Dependencies](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/elliot-nelson/rush-phased-builds-example/main/phases.uml&cache=no)

## Test cases

The projects and phases above should cover the following test cases (expand as necessary).

1. Basic "build->test" phases -- can downstream project build while upstream project tests?
2. The `update-readme` phase doesn't depend on anything, does the scheduler handle that?
3. The `push-notes` phase depends on multiple tasks (both upstream and self), does the scheduler handle that?
4. The `@acme/utils` project doesn't implement `push_notes` phase -- what's that look like?
5. Projects like rigs often won't include any/all build phases -- do they mess up phased builds?
  a. More specifically -- if a project HAD a build script, but no phases at all, can the scheduler collapse all the phases back to build?
  b. Maybe projects should _opt in_ to phases somehow, so that projects can be converted one at a time.
  c. Or, alternately, projects can _opt out_ of phases, and that could be the first step in a large conversion.
