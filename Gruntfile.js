var fs = require('fs');
module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
    options: {

    },
    requirejs: {
      options: {
        optimize: grunt.option("debug") ? "none" : "uglify"
      },
      std: {
        options: {
          appDir: './src/js',
          baseUrl: './',
// uncomment for AngularJS
//					onBuildRead: function(moduleName, path, contents) {
//						return require('ngmin').annotate(contents);
//					},
          paths: {
            app: './',
          },
          dir: 'public-built/js',
          pragmasOnSave: {
            excludeJade: true
          },
          modules: [{
              name: 'common',
              include: [
                  'jquery',
              ],
            }, {
              name: 'main-page',
              include: ['main-page', 'main'],
              exclude: ['common']
            }
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.registerTask('build', ['requirejs:std']);
};