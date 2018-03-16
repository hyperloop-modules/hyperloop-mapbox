var mapView,
	Activity = require('android.app.Activity'),
	MapView = require('com.mapbox.mapboxsdk.maps.MapView'),
	MapboxMapOptions = require('com.mapbox.mapboxsdk.maps.MapboxMapOptions'),
	LatLng = require('com.mapbox.mapboxsdk.geometry.LatLng'),
	LatLngBounds = require('com.mapbox.mapboxsdk.geometry.LatLngBounds'),
	CameraPositionBuilder = require('com.mapbox.mapboxsdk.camera.CameraPosition.Builder'),
	OnMapReadyCallback = require('com.mapbox.mapboxsdk.maps.OnMapReadyCallback');

function View(args) {
	var options = new MapboxMapOptions();

	if (args.region && args.region.latitude && args.region.longitude) {
		var latLong = new LatLng(args.region.latitude, args.region.longitude);
		var cameraBuilder = new CameraPositionBuilder().zoom(args.region.zoomLevel || 7).bearing(args.region.direction || 0).target(latLong);
		options = options.camera(cameraBuilder.build());
	}
	mapView = new MapView(new Activity(Ti.Android.currentActivity), options);
}

View.prototype.setVisibleCoordinateBounds = function(args) {
	mapView.getMapAsync(new OnMapReadyCallback({
		onMapReady: function(mapboxMap) {
			var bounds = LatLngBounds.from(args.northEast.latitude, args.northEast.longitude, args.southWest.latitude, args.southWest.longitude);
			mapboxMap.setLatLngBoundsForCameraTarget(bounds);
		}
	}));
};

View.prototype.addAnnotation = function(annotation) {
	mapView.getMapAsync(new OnMapReadyCallback({
		onMapReady: function(mapboxMap) {
			mapboxMap.addMarker(annotation);
		}
	}));
};

View.prototype.getInstance = function() {
	return mapView;
};

module.exports = View;
