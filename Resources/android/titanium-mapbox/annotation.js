const MarkerOptions = require('com.mapbox.mapboxsdk.annotations.MarkerOptions');
const LatLng = require('com.mapbox.mapboxsdk.geometry.LatLng');

export default class Annotation {
	constructor(args) {
		if (!args.latitude || !args.longitude) {
			throw new Error('Missing latitude / longitude');
		}

		this.annotation = new MarkerOptions().setTitle(args.title).setPosition(new LatLng(args.latitude, args.longitude));
 	}

	getInstance() {
		return this.annotation;
	}
};
