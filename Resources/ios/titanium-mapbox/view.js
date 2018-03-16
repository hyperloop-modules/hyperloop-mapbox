const UIScreen = require('UIKit/UIScreen');
const UIViewAutoresizingFlexibleWidth = require('UIKit').UIViewAutoresizingFlexibleWidth;
const UIViewAutoresizingFlexibleHeight = require('UIKit').UIViewAutoresizingFlexibleHeight;
const MGLMapView = require('Mapbox/MGLMapView');
const MGLCoordinateBoundsMake = require('Mapbox').MGLCoordinateBoundsMake;
const CLLocationCoordinate2DMake = require('CoreLocation').CLLocationCoordinate2DMake;

export default class View {
	constructor(args) {
		this.mapView = MGLMapView.alloc().initWithFrame(UIScreen.mainScreen.bounds);
		
		if (args.region && args.region.latitude && args.region.longitude) {
			const latitude = args.region.latitude;
			const longitude = args.region.longitude;
			const animated = args.region.animated === undefined ? true : args.region.animated;
			const zoomLevel = args.region.zoomLevel || 7;
			const direction = args.region.direction || 0;

			// Wondering about the method name? It's simply:
			// setCenterCoordinate:zoomLevel:direction:animated in Hyperloop (concatenated)
			this.mapView.setCenterCoordinateZoomLevelDirectionAnimated(CLLocationCoordinate2DMake(latitude, longitude), zoomLevel, direction, animated);
		}
	}

	set visibleCoordinateBounds(args) {
		const bounds = MGLCoordinateBoundsMake(
	    CLLocationCoordinate2DMake(args.southWest.latitude, args.southWest.longitude),
	    CLLocationCoordinate2DMake(args.northEast.latitude, args.northEast.longitude)
		);
	  this.mapView.setVisibleCoordinateBounds(bounds);
	}

	addAnnotation(annotation) {
		this.mapView.addAnnotation(annotation);
	};

	getInstance() {
		return this.mapView;
	}
}
