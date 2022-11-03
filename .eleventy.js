module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/img");
	eleventyConfig.addPassthroughCopy("./src/css");
	eleventyConfig.addWatchTarget("./src/css");
  	return {
    	dir: {
    		input: "src",
    	  	output: "dist"
		}
  	}
};