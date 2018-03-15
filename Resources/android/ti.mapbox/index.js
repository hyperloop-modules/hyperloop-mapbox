var View = require('./view');
var Annotation = require('./annotation');
var Mapbox = require('com.mapbox.mapboxsdk.Mapbox');
var Activity = require('android.app.Activity');
var initialized = false;

exports.createView = function(args) {
	// lazily init with access token
	if (!initialized) {
		Mapbox.getInstance(new Activity(Ti.Android.currentActivity), "<your access token here>");
		initialized = true;
	}
	return new View(args);
};

exports.createAnnotation = function(args) {
	return new Annotation(args);
};
