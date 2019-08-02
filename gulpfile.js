'use strict';

const gulp = require('gulp');

const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const pug = require('gulp-pug');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

function lazyRequireTask(taskName, path, options) {
    options = options || {};
    options.taskName = taskName;
    gulp.task(taskName, function(callback) {
        let task = require(path).call(this, options);

        return task(callback);
    });
}

// ********* Webpack task
lazyRequireTask('webpack', './tasks/webpack', {
    src: 'frontend/js/app.js',
    dst: 'public/js/'
});

lazyRequireTask('css', './tasks/css', {
    src: 'frontend/sass/app.scss'
});

lazyRequireTask('assets', './tasks/assets', {
    src: 'frontend/assets/**'
});

lazyRequireTask('clean', './tasks/clean', {
    dst: 'public'
});

lazyRequireTask('serve', './tasks/serve', {
    dst: 'public'
});


gulp.task('svgBuild', function () {
    return gulp.src('frontend/assets/img/svg/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "sprite.svg",
                    render: {
                        scss: {
                            dest:'_sprite.scss',
                            template:"frontend/sass/templates/_sprite_template.scss"
                        }
                    }
                }
            }
        }))
        .pipe(gulp.dest('frontend/assets/sprite/'));
});

gulp.task('pug', function buildHTML() {
    return gulp.src('frontend/pug/pages/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .on("error", notify.onError(function(error) {
            return "Message to the notifier: " + error.message;
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {

    gulp.watch('frontend/sass/**/*scss', gulp.series('css')).on('change', function (event) {
        if (event.type === 'deleted') {
            delete cache.caches['css'][event.path];
            remember.forget('css', event.path);
        }
    });

    gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
    gulp.watch('frontend/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('frontend/assets/img/svg/*.svg', gulp.series('svgBuild'));
    gulp.watch('frontend/**/*.{js,json,jsx}', gulp.series('webpack'));
});

gulp.task('build', gulp.series('clean', gulp.parallel('css', 'assets', 'pug', 'webpack')));

gulp.task('default',
    gulp.series('build', gulp.parallel('watch', 'serve'))
);


