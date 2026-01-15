default: build

dev: (eleventy "--serve")

build: (eleventy)

build-prod: (eleventy "--output=build/prod")

eleventy *ARGS:
  npx @11ty/eleventy {{ARGS}}
