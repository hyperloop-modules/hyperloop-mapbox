var mapView,
		UIScreen = require('UIKit/UIScreen'),
		UIViewAutoresizingFlexibleWidth = require('UIKit').UIViewAutoresizingFlexibleWidth,
		UIViewAutoresizingFlexibleHeight = require('UIKit').UIViewAutoresizingFlexibleHeight,
		MGLMapView = require('MapBox/MGLMapView');

function View() {
	mapView = new MGLMapView.alloc().initWithFrame(UIScreen.mainScreen.bounds);
	mapView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
}

View.prototype.getInstance = function() {
	return mapView;
};

View.prototype.setCenter = function(args) {
	mapView.setCenterAnimated(CLLocationCoordinate2D(args.latitude, args.longitude), args.animated === undefined ? true : args.animated);
};

module.exports = View;
