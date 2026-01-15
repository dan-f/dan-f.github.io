export default function (eleventyConfig) {
  // all website code and assets live in `src`
  eleventyConfig.setInputDirectory("src");
  // builds go to `_site`
  eleventyConfig.setOutputDirectory("_site");
}
