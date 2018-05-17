# Mapbox SDK in Titanium and Hyperloop

Use the Mapbox SDK (iOS and Android) in Axway Hyperloop! This is an example of using the SDK, so this does not 
expose all possible API's of the SDK. See the [official](https://www.mapbox.com/ios-sdk/) documentation for details.

> **Note**: The examples here are written in ES6 (enable with `<transpile>true</transpile>` in your tiapp.xml) and Titanium SDK 7.1.0. You can still use it with Titanium 7.0.x and classic ES5 if you want!

<img src="example.jpg" width="800" alt="Mapbox SDK in Axway Hyperloop" />

## Initialize

Use your Mapbox access-token to initialize the Mapbox module:
```js
import { Mapbox } from 'titanium-mapbox';

Mapbox.initialize('YOUR_MAPBOX_ACCESS_TOKEN');
```

## Features

### View

```js
import { MapView } from 'titanium-mapbox';

const mapView = new MapView({
  region: {
    latitude: 52.020388,
    longitude: 9.580078,
    animated: true
  }
});

myWindow.add(mapView.getInstance());
```

### Annotation

```js
import { Annotation } from 'titanium-mapbox';

const annotation = new Annotation({
  latitude: 52.020388,
  longitude: 9.580078
});

mapView.addAnnotation(annotation.getInstance());
```

See a full example in `Resources/app.js`!

## iOS Configuration

Add the following tags to your plist-section to alloy Geolocation access:
```xml
<!-- General Geolocation permissions -->
<key>NSLocationWhenInUseUsageDescription</key>
<string>Can we access your location while using the app?</string>
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>Can we access your location?</string>
```

## Android Configuration
1. Ensure you have installed at least Gradle 4.1 by running
```sh
brew install gradle
brew update gradle
```
2. Run gradle to pull down the necessary android libraries into `platform/android` (Alloy: `app/platform/android`):
```sh
gradle getDeps
```
3. Now build!
```sh
appc run -p android
```

## License

Apache 2.0

## Authors

- Hans Knöchel (Axway Appcelerator)
- Chris Williams (Axway Appcelerator)
