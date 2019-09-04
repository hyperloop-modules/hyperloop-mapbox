var mapView,
		UIScreen = require('UIKit/UIScreen'),
		UIViewAutoresizingFlexibleWidth = require('UIKit').UIViewAutoresizingFlexibleWidth,
		UIViewAutoresizingFlexibleHeight = require('UIKit').UIViewAutoresizingFlexibleHeight,
		MGLMapView = require('Mapbox/MGLMapView'),
		MGLCoordinateBoundsMake = require('Mapbox').MGLCoordinateBoundsMake,
		CLLocationCoordinate2DMake = require('CoreLocation').CLLocationCoordinate2DMake;

function View(args) {
	mapView = MGLMapView.alloc().initWithFrame(UIScreen.mainScreen.bounds);
	
	if (args.region && args.region.latitude && args.region.longitude) {
		var latitude = args.region.latitude;
		var longitude = args.region.longitude;
		var animated = args.region.animated === undefined ? true : args.region.animated;
		var zoomLevel = args.region.zoomLevel || 7;
		var direction = args.region.direction || 0;

		// Wondering about the method name? It's simply:
		// setCenterCoordinate:zoomLevel:direction:animated in Hyperloop (concatenated)
		mapView.setCenterCoordinateZoomLevelDirectionAnimated(CLLocationCoordinate2DMake(latitude, longitude), zoomLevel, direction, animated);
	}
}

View.prototype.setVisibleCoordinateBounds = function(args) {
	var bounds = MGLCoordinateBoundsMake(
    CLLocationCoordinate2DMake(args.southWest.latitude, args.southWest.longitude),
    CLLocationCoordinate2DMake(args.northEast.latitude, args.northEast.longitude)
	);
  mapView.setVisibleCoordinateBounds(bounds);
};

View.prototype.addAnnotation = function(annotation) {
	mapView.addAnnotation(annotation);
};

View.prototype.getInstance = function() {
	return mapView;
};

module.exports = View;