var Mapbox = require('ti.mapbox');

var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

var mapView = Mapbox.createView();

win.add(mapView.getInstance());
win.open();
