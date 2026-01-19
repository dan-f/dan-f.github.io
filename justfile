default: build

dev: (eleventy "--serve")

build: (eleventy)

eleventy *ARGS:
  rm -r _site && npx @11ty/eleventy {{ARGS}}

deps:
  npm install
