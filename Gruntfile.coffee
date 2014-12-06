# jade_data = {
# 	title: 'The Site Title'
# 	env: 'dev'
# 	description: 'This is the SEO description'
# }

module.exports = ( grunt ) ->

	# target = grunt.option('target') || 'dev'

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')

		uglify:
			production:
				files:
					'dest/js/bundle.js': ['out/js/bundle.js']

		cssmin:
			production:
				files:
					'dest/css/bundle.css': ['out/css/bundle.css']

		copy:
			files:
				expand: true
				# flatten: true
				cwd: 'src/files/'
				src: '**'
				dest: 'out/'
			# html:
			# 	expand: true
			# 	flatten: true
			# 	src: 'src/*.html'
			# 	dest: 'out/'
			production:
				expand: true
				flatten: true
				src: ['out/**', '!out/js/**', '!out/css/**']
				dest: 'dest/'


		stylus:
			options:
				compress: false
			compile:
				files:
					'out/css/bundle.css': 'src/css/*.styl'

		jade:
			compile:
				options:
					data: ()->
						jade_data = require( './data.json' )
						jade_data.env = 'dev'
						jade_data.timestamp = new Date()
						jade_data
					pretty: true
				files:
					'out/index.html': ['src/*.jade']
			production:
				options:
					data: ()->
						jade_data = require( './data.json' )
						jade_data.env = 'production'
						jade_data.timestamp = new Date()
						jade_data
					pretty: false
				files:
					'out/index.html': ['src/*.jade']

		browserify:
			compile:
				src: 'src/js/app.js'
				dest: 'out/js/bundle.js'

		watch:
			styl:
				files: ['src/css/*.styl']
				tasks: ['stylus:compile']
				options:
					livereload: true
			jade:
				files: ['src/index.jade', 'src/jade/*.jade']
				tasks: ['jade:compile']
				options:
					livereload: true
			browserify:
				files: ['src/js/**']
				tasks: ['browserify:compile']
				options:
					livereload: true
		clean: 
			out: ['out']
			dest: ['dest']
	})

	grunt.loadNpmTasks('grunt-contrib-stylus')
	grunt.loadNpmTasks('grunt-contrib-jade')
	grunt.loadNpmTasks('grunt-browserify')

	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-clean')
	grunt.loadNpmTasks('grunt-contrib-copy')

	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-cssmin')

	grunt.registerTask('default',
		[
			'build'
			'watch'
		]
	)
	grunt.registerTask('build',
		[
			'clean:out'
			'stylus:compile'
			'jade:compile'
			'browserify:compile'
			'copy:files'
		]
	)
	grunt.registerTask('export',
		[
			'clean:dest'
			'build'
			'jade:production'
			'copy:production'
			'cssmin:production'
			'uglify:production'
			'build'
		]
	)

	# grunt.event.on('watch', ( action, filepath, target ) ->
	# 	grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	# );

	# grunt.event.on('stylus', ( action, filepath, target ) ->
	# 	grunt.log.writeln( env )
	# 	console.log( 'event!' );
	# );
