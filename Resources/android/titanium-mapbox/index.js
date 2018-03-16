const View = require('./view');
const Annotation = require('./annotation');
const Mapbox = require('com.mapbox.mapboxsdk.Mapbox');
const Activity = require('android.app.Activity');

let initialized = false;

const createView = (args) => {
	// lazily init with access token
	if (!initialized) {
		Mapbox.getInstance(new Activity(Ti.Android.currentActivity), 'YOUR ACCESS TOKEN HERE!');
		initialized = true;
	}
	return new View(args);
};

const createAnnotation = (args) => {
	return new Annotation(args);
};

export { createView, createAnnotation }
