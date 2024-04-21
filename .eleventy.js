
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // .eleventy.js




// ['a', 1, 2, '1']



    eleventyConfig.addPassthroughCopy('./src/assets/style.css');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };

 
  



