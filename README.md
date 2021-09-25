# rush-phased-builds-example

This repo is a minimal example of a rush monorepo, used as a test bed for phased builds.

## Projects

Project           | Description
----------------  | -----------
@acme/utils       | An example library
@acme/dashboard   | An example webpack/react app
@acme/classic-rig | An example rig (for rush-project.json, mostly)

## Phases

Phase Name                Phase Dependencies
----------------------- | ------------------
`_phase:build`          | upstream `_phase:build`
`_phase:lint`           | self `_phase:build`
`_phase:test`           | self `_phase:build`
`_phase:readme_updater` | n/a
`_phase:push_notes`     | self `_phase:build`, self `_phase:readme_updater`, upstream `_phase:readme_updater`

![Phase Dependencies](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/jonashackt/plantuml-markdown/master/example-uml.iuml)
