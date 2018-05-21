import MapView from './mapview';
import Annotation from './annotation';

const NativeMapbox = require('com.mapbox.mapboxsdk.Mapbox');
const Activity = require('android.app.Activity');

class Mapbox {
	static initialize(apiKey) {
		if (!apiKey) { throw new Error('No API-key provided!'); }
		NativeMapbox.getInstance(new Activity(Ti.Android.currentActivity), apiKey);
	}
}

export { Annotation, MapView, Mapbox }
