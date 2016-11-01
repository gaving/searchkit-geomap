import React from 'react';
import {render} from 'react-dom';

import {
  SearchkitProvider, SearchkitManager,
  Layout, LayoutResults, LayoutBody, TopBar,
  SearchBox
} from 'searchkit';

import { GeoMap } from '../../src';

require('searchkit/theming/theme.scss');

const host = 'http://demo.searchkit.co/api/crimes';
const searchkit = new SearchkitManager(host);
const opts = {
  width: 800,
  height: 600,
  latitude: 53.4129,
  longitude: -8.2439,
  zoom: 4,
  mapStyle: 'mapbox://styles/mapbox/streets-v9',
  mapboxApiAccessToken:
    'pk.eyJ1IjoiZ2F2aW5nIiwiYSI6ImNpdXVhbWdvbjAwMHAyb3IzcTN0Ym1xM3AifQ.77yE6Aps7Pro8MOr-w-V3A'
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
