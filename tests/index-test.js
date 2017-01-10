import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import {
  SearchkitProvider, SearchkitManager,
  Layout, LayoutResults, LayoutBody, TopBar,
  SearchBox
} from 'searchkit';

import { GeoMap } from 'src/'

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

describe('GeoMap', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    render(<SearchkitProvider searchkit={searchkit}><GeoMap { ...opts } /></SearchkitProvider>, node, () => {
      expect(node.innerHTML).toContain('canvas')
    })
  })
})
