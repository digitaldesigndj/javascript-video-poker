# DocPad Configuration File
# http://docpad.org/docs/config
balUtil = require "bal-util"

# Define the DocPad Configuration
docpadConfig = {
	port: 9779
	templateData:
		scripts: ['bundle.js']
	events:
		# Write After
		# Used to bundle the editor
		writeAfter: (opts,next) ->
			# Prepare
			docpad = @docpad
			rootPath = docpad.config.rootPath
			outPath = docpad.config.outPath
			# Bundle the scripts the editor uses together
			#command = "browserify out/app.js > out/bundle.js"
			command = """
				#{rootPath}/node_modules/.bin/browserify
				#{outPath}/app.js
				> #{outPath}/bundle.js
				""".replace(/\n/g,' ')

			# Execute
			balUtil.exec(command, {cwd:rootPath,output:true}, next)

			# Chain
			@
}

# Export the DocPad Configuration
module.exports = docpadConfig