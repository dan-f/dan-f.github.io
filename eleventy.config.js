export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");

  // default output directory for development.
  // production builds are placed in `build/prod`
  eleventyConfig.setOutputDirectory("build/dev");
}
