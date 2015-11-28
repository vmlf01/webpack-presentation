var webpack = require("webpack");

// webpack config file is just a node module,
// so we need to export a config object with
// the settings
module.exports = {
  // set the entry point for webpack compilation
  entry: {
    app: "./app.js"
  },

  // set the output filename for the generated bundle
  output: {
    filename: "bundle.js"
  }
};
