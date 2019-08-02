'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combine = require('stream-combiner2').obj;
const fs = require('fs');

module.exports = function(options) {

    return function() {

            var params = {
                batch: [options.structure, options.sections, options.components]
            };

        return combine(
            gulp.src(options.src),
            $.compileHandlebars(null, params),
            $.rename({
                extname: '.html'
            }),
            gulp.dest(options.dst)
        )
    };
};
