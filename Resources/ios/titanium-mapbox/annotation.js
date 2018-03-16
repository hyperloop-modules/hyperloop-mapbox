const MGLPointAnnotation = require('Mapbox/MGLPointAnnotation');
const MGLCoordinateBoundsMake = require('Mapbox').MGLCoordinateBoundsMake;
const CLLocationCoordinate2DMake = require('CoreLocation').CLLocationCoordinate2DMake;

export default class Annotation {
	constructor(args) {
		this.annotation = new MGLPointAnnotation();

		if (!args.latitude || !args.longitude) {
			throw 'Missing latitude / longitude';
		}

		this.annotation.coordinate = CLLocationCoordinate2DMake(args.latitude, args.longitude);
		this.annotation.title = args.title;
		this.annotation.canShowCallout = true;
		
		// Expose more? See https://www.mapbox.com/ios-sdk/api/3.7.3/Classes/MGLPointAnnotation.html
	}

	getInstance() {
		return this.annotation;
}
