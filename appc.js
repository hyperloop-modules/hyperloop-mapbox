
/**
 * Hyperloop configuration
 */
module.exports = {
	type: 'app',
	group: 'titanium',
	dependencies: {},
	hyperloop: {
		ios: {
			xcodebuild: {
				flags: {
					LD_RUNPATH_SEARCH_PATHS: "$(inherited) '@executable_path/Frameworks' '@loader_path/Frameworks'"
				}
			}
		}
	}
};
