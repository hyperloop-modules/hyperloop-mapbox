var annotation,
		Marker = require('com.mapbox.mapboxsdk.annotations.Marker'),
		LatLng = require('com.mapbox.mapboxsdk.geometry.LatLng');

function Annotation(args) {
	annotation = new Marker();

	if (!args.latitude || !args.longitude) {
		throw 'Missing latitude / longitude';
	}

	annotation.setPosition(new LatLng(args.latitude, args.longitude));
	annotation.setTitle(args.title);
}

Annotation.prototype.getInstance = function() {
	return annotation;
};

module.exports = Annotation;
