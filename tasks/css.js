'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = function (options) {
    return function () {
        return combiner(
            gulp.src(options.src),
            $.if(isDevelopment, $.sourcemaps.init({loadMaps: true})),
            $.sass(),
            $.autoprefixer("last 4 versions"),
            $.remember('css'),
            $.cleanCss(),
           /* $.uncss({
                ignore: ['.test-block', /test\-[0-9]+/],
                html: ['public/index.html'],
            }),*/
            $.rename('app.min.css'),
            $.if(isDevelopment, $.sourcemaps.write()),
            gulp.dest('public/css')
        ).on('error', $.notify.onError());
    };
};
