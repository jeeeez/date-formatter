module.exports = function(config) {
	config.set({
		frameworks: ['jasmine', 'browserify'],

		files: [
			'test/index.js'
		],
		preprocessors: {
			'test/index.js': ['browserify']
		},
		browserify: {
			debug: true,
			transform: ['babelify']
		}
	})
}
