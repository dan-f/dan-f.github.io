default: build

dev: (eleventy "--serve")

build: (eleventy)

eleventy *ARGS: (deps)
  npx @11ty/eleventy {{ARGS}}

deps:
  npm install
