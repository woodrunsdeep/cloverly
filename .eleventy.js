module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/img");
	eleventyConfig.addWatchTarget("./src/css/style.css");
  	return {
    	dir: {
    		input: "src",
    	  	output: "dist"
		}
  	}
};