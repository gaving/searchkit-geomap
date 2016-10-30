# searchkit-geomap

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

## License

MIT
