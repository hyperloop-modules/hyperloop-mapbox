var MapBox = require('ti.mapbox');

var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

var mapView = MapBox.createView();

win.add(mapView.getInstance());
win.open();
