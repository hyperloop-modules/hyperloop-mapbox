var annotation,
	MarkerOptions = require('com.mapbox.mapboxsdk.annotations.MarkerOptions'),
	LatLng = require('com.mapbox.mapboxsdk.geometry.LatLng');

function Annotation(args) {
	if (!args.latitude || !args.longitude) {
		throw 'Missing latitude / longitude';
	}

	annotation = new MarkerOptions().setTitle(args.title).setPosition(new LatLng(args.latitude, args.longitude));
}

Annotation.prototype.getInstance = function() {
	return annotation;
};

module.exports = Annotation;