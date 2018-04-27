# searchkit-geomap

[![npm](https://nodei.co/npm/searchkit-geomap.png)](https://nodei.co/npm/searchkit-geomap/)

[![build status](https://secure.travis-ci.org/gaving/searchkit-geomap.png)](http://travis-ci.org/gaving/searchkit-geomap)

Map component for Searchkit

![searchkit-geomap](https://github.com/gaving/searchkit-geomap/raw/master/site/1.gif)

## Installation

`yarn add searchkit-geomap --save`

## Features

* GeoMap : Display aggregations on a MapGL map using Mapbox with [react-map-gl](https://github.com/uber/react-map-gl).

## Example

```javascript
import React, { Component } from "react";
import { GeoMap } from "searchkit-geomap";

const host = "http://demo.searchkit.co/api/crimes";
const searchkit = new SearchkitManager(host);
const opts = {
  width: 800,
  height: 600,
  latitude: 37.7577,
  longitude: -122.4376,
  mapboxApiAccessToken: "key"
};

class Demo extends Component {
  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <Layout>
          <TopBar>
            <SearchBox autofocus={true} searchOnChange={false} />
          </TopBar>
          <LayoutBody>
            <LayoutResults>
              <GeoMap {...opts} />
            </LayoutResults>
          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    );
  }
});

render(<Demo />, document.querySelector("#demo"));
```

## Development

* `git clone https://github.com/gaving/searchkit-geomap.git`
* `yarn`
* `yarn start`

## License

MIT
