var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/reactApp.js",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  }
};
