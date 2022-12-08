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
};
