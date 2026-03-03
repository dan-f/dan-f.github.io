default: build

dev: (eleventy "--serve")

build: (eleventy)

eleventy *ARGS:
  rm -rf _site && npx @11ty/eleventy {{ARGS}}

deps:
  npm install
