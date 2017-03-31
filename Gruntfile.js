module.exports = function(grunt) {

	grunt.initConfig({
		uglify: { 
			my_target: { 
				options: { 
					sourceMap: true
					//sourceMapName: 'dist/assets/js/all.js.map' 
				}, 
				files: [{
                        expand: true,
                        src: ['src/assets/js/scripts.js', 'src/assets/js/plugins.js'],
                        dest: 'dist/assets',
                        cwd: '.'
                    }]
                } 
		},

		sass: {
			dist: {
				files: {
					'dist/assets/css/style.min.css' : 'src/assets/scss/style.scss'
					//'dist/assets/css/style.min.css' : 'src/assets/**/*.scss'
				}
			},
			options: {
				style: 'expanded'
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
			sass: {
				files: ['src/assets/scss/*.scss', 'src/assets/**/*.scss'],
				tasks: ['sass'],
			},
			uglify: {
				files: ['src/assets/js/*.js', 'src/assets/**/*.js'],
				tasks: ['uglify']
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
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', [	
		'browserSync',	
		'sass',
		'htmlmin',
		'watch',
		'uglify',
		'nodemon'	
	]);
};