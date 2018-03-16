import MapView from './mapview';
import Annotation from './annotation';

const Mapbox = require('com.mapbox.mapboxsdk.Mapbox');
const Activity = require('android.app.Activity');

Mapbox.getInstance(new Activity(Ti.Android.currentActivity), 'YOUR_MAPBOX_ACCESS_TOKEN');

export { Annotation, MapView }
