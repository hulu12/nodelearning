module.exports = function(grunt){
	[
	 'grunt-contrib-jshint',
	].forEach(function(task){
		grunt.loadNpmTasks(task);
	});

	grunt.initConfig({
	    jshint:{
	    	files:['learnexpress.js','public/js/**/*.js',
	    			'lib/**/*.js'],
	    }
	  });

	  // Load the plugin that provides the "uglify" task.
	  //grunt.loadNpmTasks('grunt-contrib-uglify');

	  // Default task(s).
	  grunt.registerTask('default', ['jshint']);

};