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

        sass: {
            dist: {
                files: {
                    'dist/assets/css/style.min.css': ['src/assets/scss/*.scss', 'src/assets/scss/**/*.scss']
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

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', [
        'browserSync',
        'uglify',
        'sass',
        'htmlmin',
        'watch',
        'nodemon'
    ]);
};