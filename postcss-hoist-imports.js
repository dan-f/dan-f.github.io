/**
 * Hoist `@import` statements to the top of the given CSS file.
 *
 * Necessary because the 11ty bundler naively globs CSS files together without
 * caring about AST semantics.
 */
export default function hoistImports(opts = {}) {
  return {
    postcssPlugin: "postcss-hoist-imports",

    Once(root, _postcss) {
      root.nodes
        .filter((node) => node.type === "atrule" && node.name === "import")
        .forEach((node) => {
          root.removeChild(node);
          root.prepend(node);
        });
    },
  };
}

hoistImports.postcss = true;
