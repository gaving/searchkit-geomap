import {
  Accessor,
  FilterBucket,
  GeohashBucket,
  GeoBoundsMetric,
  BoolMust,
  FilteredQuery
} from "searchkit";

export class GeoAccessor extends Accessor {
  setArea(area) {
    this.area = area;
  }

  setPrecision(precision) {
    this.precision = precision;
  }

  setResults(results) {
    super.setResults(results);
    console.log(results);
    // let significant = _.map(this.getAggregations(['geo', 'significant', 'buckets'], []) , 'key');
  }

  buildSharedQuery(query) {
    //   BoolMust([
    //     {
    //       filter: {
    //         geo_bounding_box: {
    //           location: this.area
    //         }
    //       }
    //     }
    //   ])

    if (this.area) {
      return query.addQuery(
        new FilteredQuery({
          filter: {
            geo_bounding_box: {
              location: this.area
            }
          }
        })
      );
    }
    return query;
  }

  buildOwnQuery(query) {
    return query.setAggs(
      new FilterBucket(
        "geo",
        query.getFilters(),
        new GeohashBucket(
          "areas",
          "location",
          {},
          new GeoBoundsMetric("cell", "location")
        ),
        {},
        new GeoBoundsMetric("bounds", "location")
      )
    );
  }
}
