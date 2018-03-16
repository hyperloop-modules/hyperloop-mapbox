var annotation,
		MGLPointAnnotation = require('Mapbox/MGLPointAnnotation'),
		MGLCoordinateBoundsMake = require('Mapbox').MGLCoordinateBoundsMake,
		CLLocationCoordinate2DMake = require('CoreLocation').CLLocationCoordinate2DMake;

function Annotation(args) {
	annotation = new MGLPointAnnotation();

	if (!args.latitude || !args.longitude) {
		throw 'Missing latitude / longitude';
	}

	annotation.coordinate = CLLocationCoordinate2DMake(args.latitude, args.longitude);
	annotation.title = args.title;
	annotation.canShowCallout = true;
	
	// Expose more? See https://www.mapbox.com/ios-sdk/api/3.7.3/Classes/MGLPointAnnotation.html
}

Annotation.prototype.getInstance = function() {
	return annotation;
};

module.exports = Annotation;
