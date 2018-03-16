// Include our mapbox module (from "ti.mapbox/*.js")
import { MapView, Annotation } from 'titanium-mapbox';

// Create a new window
const win = Ti.UI.createWindow({
  backgroundColor: '#fff'
});

// Create a new map
const mapView = new MapView({
  region: {
    latitude: 52.020388,
    longitude: 9.580078,
    animated: true
  }
});

// Set the coordinate bounds
mapView.visibleCoordinateBounds = {
  southWest: {
    latitude: 47.600607,
    longitude: 6.152344
  },
  northEast: {
    latitude: 53.977090,
    longitude: 13.447266
  }
};

// Add a new annotation / marker
mapView.addAnnotation(new Annotation({
  latitude: 52.020388,
  longitude: 9.580078,
  title: 'Hyperloop rocks!'
}).getInstance());

// Add the constructed map
win.add(mapView.getInstance());

// Open the window
win.open();
