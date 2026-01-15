default: build

dev: (eleventy "--serve")

build: (eleventy)

eleventy *ARGS:
  npx @11ty/eleventy {{ARGS}}
