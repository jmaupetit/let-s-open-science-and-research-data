module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: [
          'bower_components/reveal.js/css/theme/',
          'bower_components/sass-css3-mixins'
        ]
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/theme/tailordev.css': 'css/theme/source/tailordev.scss'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'css/theme/source/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}