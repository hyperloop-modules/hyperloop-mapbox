const	Activity = require('android.app.Activity');
const MapView = require('com.mapbox.mapboxsdk.maps.MapView');
const MapboxMapOptions = require('com.mapbox.mapboxsdk.maps.MapboxMapOptions');
const LatLng = require('com.mapbox.mapboxsdk.geometry.LatLng');
const LatLngBounds = require('com.mapbox.mapboxsdk.geometry.LatLngBounds');
const CameraPositionBuilder = require('com.mapbox.mapboxsdk.camera.CameraPosition.Builder');
const OnMapReadyCallback = require('com.mapbox.mapboxsdk.maps.OnMapReadyCallback');

export default class View {
	constructor(args) {
		let options = new MapboxMapOptions();

		if (args.region && args.region.latitude && args.region.longitude) {
			const latLong = new LatLng(args.region.latitude, args.region.longitude);
			const cameraBuilder = new CameraPositionBuilder().zoom(args.region.zoomLevel || 7).bearing(args.region.direction || 0).target(latLong);
			options = options.camera(cameraBuilder.build());
		}
		this.mapView = new MapView(new Activity(Ti.Android.currentActivity), options);
	}

	set visibleCoordinateBounds(args) {
		this.mapView.getMapAsync(new OnMapReadyCallback({
			onMapReady: (mapboxMap) => {
				const bounds = LatLngBounds.from(args.northEast.latitude, args.northEast.longitude, args.southWest.latitude, args.southWest.longitude);
				mapboxMap.setLatLngBoundsForCameraTarget(bounds);
			}
		}));
	}

	addAnnotation(annotation) {
		this.mapView.getMapAsync(new OnMapReadyCallback({
			onMapReady: (mapboxMap) => {
				mapboxMap.addMarker(annotation);
			}
		}));
	}

	getInstance() {
		return this.mapView;
	}
}
