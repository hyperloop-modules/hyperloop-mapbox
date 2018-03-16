import MapView from './mapview';
import Annotation from './annotation';

const MGLAccountManager = require('Mapbox/MGLAccountManager');

class Mapbox {
	static initialize(apiKey) {
		if (!apiKey) { throw 'No API-key provided!'; }
		MGLAccountManager.setAccessToken(apiKey);
	}
}

export { Annotation, MapView, Mapbox }
