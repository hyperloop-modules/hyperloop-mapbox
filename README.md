# Ti.MapBox

Use the MapBox SDK in Axway Hyperloop! This is an example of using the SDK, so this does not expose all possible API's
of the SDK. See the [official](https://www.mapbox.com/ios-sdk/) documentation for details.

<img src="example.png" width="800" alt="Mapbox SDK in Appcelerator Hyperloop" />

## Features

### View

```js
var MapBox = require('ti.mapbox');
var mapView = MapBox.createView();
```

## Configuration

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

## License

Apache 2.0

## Author

Hans Knöchel (Axway Appcelerator)
