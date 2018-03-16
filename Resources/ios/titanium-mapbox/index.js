const View = require('./view');
const Annotation = require('./annotation');

const createView = (args) => {
	return new View(args);
};

const createAnnotation = (args) => {
	return new Annotation(args);
};

export { createView, createAnnotation }
