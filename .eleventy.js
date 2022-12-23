const pageAssetsPlugin = require("eleventy-plugin-page-assets");

const now = String(Date.now());

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./styles/tailwind.config.js");
  eleventyConfig.addWatchTarget("./styles/tailwind.css");

  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addShortcode("version", function () {
    return now;
  });

  eleventyConfig.addPlugin(pageAssetsPlugin, {
    mode: "directory",
    postsMatching: "_posts/*/*.md",
  });

  eleventyConfig.addShortcode("ogImg", function ({ url, fileSlug, inputPath }) {
    if (inputPath.startsWith("./_posts/")) {
      return `${url}og-img-${fileSlug}.jpg`;
    }

    return "defaultpathtoogimage";
  });

  eleventyConfig.addFilter("cleanDate", function (dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  });
};
