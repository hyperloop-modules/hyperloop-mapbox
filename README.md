# Mapbox SDK in Titanium and Hyperloop

Use the MapBox SDK (iOS and Android) in Axway Hyperloop! This is an example of using the SDK, so this does not expose all possible API's
of the SDK. See the [official](https://www.mapbox.com/ios-sdk/) documentation for details.

**Note**: This example uses a classic Titanium project structure. To use it in Alloy, place the `titanium-mapbox` folders in `app/lib/android` and `app/lib/ios`.

<img src="example.jpg" width="800" alt="Mapbox SDK in Appcelerator Hyperloop" />

## Features

### View

```js
import MapBox from 'titanium-mapbox';

const mapView = MapBox.createView({
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
const annotation = Mapbox.createAnnotation({
  latitude: 52.020388,
  longitude: 9.580078
});

mapView.addAnnotation(annotation.getInstance());
```

## iOS Configuration

Add the following tags to your plist-section of the tiapp.xml and change `YOUR_MAPBOX_ACCESS_TOKEN` to your
actual access token
```xml
<!-- Mapbox configuration -->
<key>MGLMapboxAccessToken</key>
<string>YOUR_MAPBOX_ACCESS_TOKEN</string>

<!-- General Geolocation permissions -->
<key>NSLocationWhenInUseUsageDescription</key>
<string>Can we access your location while using the app?</string>
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>Can we access your location?</string>
```

## Android Configuration
1. Place your access token in `Resources/android/titanium-mapbox/index.js` (Alloy: `app/lib/android/titanium-mapbox/index.js`)
2. Ensure you have installed at least Gradle 4.1 by running `brew install gradle` and `brew update gradle`
3. Run gradle to pull down the necessary android libraries into `platform/android` (Alloy: `app/platform/android`):
```sh
gradle getDeps
```
4. Now build!
```sh
appc run -p android
```

## License

Apache 2.0

## Authors

- Hans Knöchel (Axway Appcelerator)
- Chris Williams (Axway Appcelerator)
