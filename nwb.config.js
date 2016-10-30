var path = require('path');

module.exports = {
  type: 'react-component',
  build: {
    externals: {
      'react': 'React'
    },
    jsNext: true,
    umd: true
  },
  webpack: {
    extra: {
      node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      },
      resolve: {
        alias: {
          'mapbox-gl/js/geo/transform': path.join(__dirname, 'node_modules/mapbox-gl/js/geo/transform'),
          'mapbox-gl': path.join(__dirname, 'node_modules/mapbox-gl/dist/mapbox-gl.js')
        }
      }
    }
  }
}
