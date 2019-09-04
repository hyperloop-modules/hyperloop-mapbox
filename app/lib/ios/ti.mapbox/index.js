var View = require('./view');
var Annotation = require('./annotation');

exports.createView = function(args) {
	return new View(args);
};

exports.createAnnotation = function(args) {
	return new Annotation(args);
};