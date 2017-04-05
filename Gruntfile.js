module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'dist/assets/js/scripts.min.js': ['src/assets/js/*.js', 'src/assets/js/**/*.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIncludeSources: true
                }
            }
        },
        bowercopy: {
             options: {
                srcPrefix: 'bower_components'
            },
             scripts: {
                options: {
                 destPrefix: 'dist/assets/libs/'
                },
                 files: {
                    'jquery/src/jquery.js': 'jquery/src/jquery.js'
      
                }
            }
        },  

        sass: {
            dist: {
                files: {
                    'dist/assets/css/style.min.css': 'src/assets/scss/style.scss'
                }
            },
            options: {
                style: 'expanded'
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/images/',
                    src: ['**/*.{jpg,gif,png}'],
                    dest: 'dist/assets/images/'
                }]
            } 
        },

        htmlmin: {
            dist: {
                files: {
                    'dist/index.html': 'src/index.html',
                    'dist/index2.html': 'src/index2.html'
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
                src: [
                    './dist/assets/css/*.css',
                    './dist/assets/css/**/*.css',
                    './dist/assets/scss/*.scss',
                    './dist/assets/scss/**/*.scss',
                    './dist/assets/js/*.js',
                    './dist/assets/js/**/*.js',
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
            uglify: {
                files: ['src/assets/js/*.js', 'src/assets/**/*.js'],
                tasks: ['uglify']
            },
            bowercopy: {
                files: ['src/assets/libs/*.js'],
                tasks: ['bowercopy']
            },
            sass: {
                files: ['src/assets/scss/*.scss', 'src/assets/**/*.scss'],
                tasks: ['sass'],
            },

            htmlmin: {
                files: 'src/index.html',
                tasks: ['htmlmin']
            }
        }
        
    });


    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', [
        'browserSync',
        'uglify',
        'sass',
        'imagemin',
        'bowercopy',
        'htmlmin',
        'watch',
        'nodemon'
      
    ]);
};