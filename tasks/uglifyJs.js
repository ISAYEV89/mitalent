'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = function (options) {
    return function() {
        return combiner(
            gulp.src(options.src),
            $.uglify(),
            gulp.dest('public/js')
       ).on('error', $.notify.onError());
    };
};
