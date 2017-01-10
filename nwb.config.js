var path = require('path');

module.exports = {
  type: 'react-component',
  "npm": {
    "esModules": true,
    "umd": {
      "global": "GeoMap",
      "externals": {
        "react": "React"
      }
    }
  },
  webpack: {
    aliases: {
      'mapbox-gl/js/geo/transform': path.join(__dirname, 'node_modules/mapbox-gl/js/geo/transform'),
      'mapbox-gl': path.join(__dirname, 'node_modules/mapbox-gl/dist/mapbox-gl.js')
    }
  }
}
