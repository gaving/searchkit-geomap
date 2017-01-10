# searchkit-geomap

[![npm](https://nodei.co/npm/searchkit-geomap.png)](https://nodei.co/npm/searchkit-geomap/)

[![build status](https://secure.travis-ci.org/gaving/searchkit-geomap.png)](http://travis-ci.org/gaving/searchkit-geomap)

Map component for Searchkit

![searchkit-geomap](https://github.com/gaving/searchkit-geomap/raw/master/site/1.gif)

## Installation

`npm install searchkit-geomap --save`

## Features

- GeoMap : Display aggregations on a MapGL map using Mapbox with [react-map-gl](https://github.com/uber/react-map-gl).

## Example

```javascript
import { GeoMap } from 'searchkit-geomap';

const host = 'http://demo.searchkit.co/api/crimes';
const searchkit = new SearchkitManager(host);
const opts = {
  width: 800,
  height: 600,
  latitude: 37.7577,
  longitude: -122.4376,
  mapboxApiAccessToken: 'key'
};

const Demo = React.createClass({
  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <Layout>
          <TopBar>
            <SearchBox
              autofocus={true}
              searchOnChange={false} />
          </TopBar>
          <LayoutBody>
            <LayoutResults>
             <GeoMap { ...opts } /> 
            </LayoutResults>
          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    )
  }
})

render(<Demo/>, document.querySelector('#demo'))
```

## Note on using Webpack

Due to some issues with Mapbox and Webpack, add the following to your webpack
config if you experience errors building:-

    var path = require('path');
    ...
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

## Development

- `git clone https://github.com/gaving/searchkit-geomap.git`
- `yarn install`
- `yarn start`

## License

MIT
