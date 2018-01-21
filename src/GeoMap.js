import React from "react";
import Immutable from "immutable";
import * as _ from "lodash";
import ReactMapGL from "react-map-gl";
import ScatterplotOverlay from "./ScatterPlotOverlay";

import ViewportMercator from "viewport-mercator-project";
import { GeoAccessor } from "./GeoAccessor";

import {
  Accessor,
  AggsContainer,
  SearchkitComponent,
  FilterBucket,
  Utils,
  GeohashBucket,
  GeoBoundsMetric,
  SignificantTermsBucket,
  FilteredQuery
} from "searchkit";

export class GeoMap extends SearchkitComponent {
  constructor(props) {
    super(props);

    this.state = {
      viewport: Object.assign(
        {
          zoom: 7,
          startDragLngLat: null,
          isDragging: false
        },
        props
      )
    };
  }

  defineAccessor() {
    return new GeoAccessor();
  }

  centerFromBound(bound) {
    return {
      lat: (bound.top_left.lat + bound.bottom_right.lat) / 2,
      lng: (bound.top_left.lon + bound.bottom_right.lon) / 2
    };
  }

  getPoints() {
    let areas = this.accessor.getAggregations(["geo", "areas", "buckets"], []);
    let points = _.map(areas, area => {
      return this.centerFromBound(area.cell.bounds);
    });
    return points;
  }

  _onViewportChange(opt) {
    const { viewport } = this.state;

    if (!opt.isDragging) {
      // stopped dragging, refresh the data
      const mercator = new ViewportMercator(viewport);

      const bounds = [
        mercator.unproject([0, 0]),
        mercator.unproject([viewport.width, viewport.height])
      ];

      const [nw, se] = bounds;

      const area = {
        top_left: { lat: nw[1], lon: nw[0] },
        bottom_right: { lat: se[1], lon: se[0] }
      };

      this.accessor.setArea(area);
      this.searchkit.search();
    }

    this.setState({
      viewport: Object.assign(viewport, {
        latitude: opt.latitude,
        longitude: opt.longitude,
        zoom: opt.zoom,
        startDragLngLat: opt.startDragLngLat,
        isDragging: opt.isDragging
      })
    });
  }

  render() {
    const { viewport } = this.state;

    const locations = Immutable.fromJS(
      this.getPoints().map(item => [item.lng, item.lat])
    );

    return (
      <ReactMapGL
        {...viewport}
        onViewportChange={this._onViewportChange.bind(this)}
      >
        <ScatterplotOverlay
          {...viewport}
          locations={locations}
          dotRadius={2}
          globalOpacity={1}
          compositeOperation="screen"
        />
      </ReactMapGL>
    );
  }
}
