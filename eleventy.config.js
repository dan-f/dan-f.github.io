import { HtmlBasePlugin } from "@11ty/eleventy";
import pluginWebc from "@11ty/eleventy-plugin-webc";
import { minify } from "html-minifier-terser";
import postcss from "postcss";
import atImport from "postcss-import";
import hoistImports from "./postcss-hoist-imports.js";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

/** @param {import("@11ty/eleventy/UserConfig").default} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setLayoutsDirectory("_layouts");
  eleventyConfig.setOutputDirectory("_site");
  eleventyConfig.addPassthroughCopy("src/static");

  // transforms
  eleventyConfig.addTransform("html-minifier", function (content) {
    if (!this.page.outputPath?.endsWith(".html")) {
      return content;
    }
    return minify(content, {
      removeComments: true,
      collapseWhitespace: true,
    });
  });

  // filters
  eleventyConfig.addFilter("pageTitle", function (page) {
    return page.data.title;
  });

  // preprocessors
  eleventyConfig.addPreprocessor("drafts", "*", (data, _content) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
  });

  // plugins
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_components/**/*.webc",
    bundlePluginOptions: {
      transforms: [
        /**
         * Process the CSS bundle with PostCSS and `postcss-import`, turning the
         * semantics of `@import` into build-time bundling rather than dynamic
         * client-side imports. All imports are relative to `_includes`.
         */
        async function (content) {
          if (this.type !== "css") {
            return content;
          }

          const result = await postcss([
            hoistImports,
            atImport({ path: ["src/_includes"] }),
          ]).process(content, { from: "", to: null });

          return result.css;
        },
      ],
    },
  });
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(HtmlBasePlugin);
}
