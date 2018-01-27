var mapView,
		UIScreen = require('UIKit/UIScreen'),
		UIViewAutoresizingFlexibleWidth = require('UIKit').UIViewAutoresizingFlexibleWidth,
		UIViewAutoresizingFlexibleHeight = require('UIKit').UIViewAutoresizingFlexibleHeight,
		MGLMapView = require('Mapbox/MGLMapView');

function View() {
	mapView = MGLMapView.alloc().initWithFrame(UIScreen.mainScreen.bounds);
}

View.prototype.getInstance = function() {
	return mapView;
};

View.prototype.setCenter = function(args) {
	var animated = args.animated === undefined ? true : args.animated;
	mapView.setCenterAnimated(CLLocationCoordinate2D(args.latitude, args.longitude), animated);
};

module.exports = View;
