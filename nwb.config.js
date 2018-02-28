var path = require("path");

module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "GeoMap",
      externals: {
        react: "React"
      }
    }
  },
  webpack: {
    html: {
      template: "demo/src/index.html"
    }
  }
};
