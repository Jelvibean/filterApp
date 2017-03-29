module.exports = function(grunt) {

	grunt.initConfig({
		// You call the cssmin task as seen below. 
		// This does two things
		//	1. Conbines styles 
		//	2. It mimifies them and save them to location provided.

		concat: {
			dist: {
				files: {
					'dist/assets/js/all.js':['src/assets/js/*.js', 'src/assets/**/*.js']
				}
			}
		},

		less: {
			dist: {
				files:{
					'dist/assets/css/style.min.css' : ['src/assets/less/*.less', 'src/assets/**/*.less']
				}
			},
			options: {
				compress: true
			}

		},

		htmlmin: {                                 
    		dist: { 
      			files: {                                   
        			'dist/index.html': 'src/index.html'    
     			},
     			options: {                                
        			removeComments: true,
        			collapseWhitespace: true
     	    	}	
   			 }   		
   		},

   		nodemon: {
  				dev: {
    				script: 'server.js'
  				}
		},

		browserSync: { 
			bsFiles: { 
		 		src :  [
		 			'./dist/assets/css/*.css', 
		 			'./dist/assets/**/*.css', 
		 			'./dist/assets/js/*.js', 
		 			'./dist/assets/**/*.js', 
		 			'./dist/index.html'
		 		]
		 	}, 
		 	options: { 
		 		watchTask: true,
		 		server: {
		 			baseDir: "./dist"
		 		}
		 	 } 
		},

		watch: {
			less: {
				files: ['src/assets/less/*.less', 'src/assets/**/*.less'],
				tasks: ['less'],
				options: {
					spawn: false					
				}
			},

			js: {
				files: ['src/assets/js/*.js', 'src/assets/**/*.js'],
				tasks: ['jshint']
			},

			htmlmin: {
				files: 'src/index.html',
				tasks: ['htmlmin']

			}			
		}	
	})

	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', [	
		'browserSync',	
		'concat',
		'less',
		'htmlmin',
		'watch',
		'nodemon'

		
	]);
};