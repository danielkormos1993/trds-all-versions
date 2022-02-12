const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const replace = require('gulp-replace');
const uglify = require('gulp-uglify-es').default;

gulp.src([
    './src/theme.css',
    './src/layout/body.css'
    ])
    .pipe(concat('trds-critical.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/'))

gulp.src([
    './src/**/*.css',
    '!./src/theme.css',
    '!./src/layout/body.css'
    ])
    .pipe(concat('trds.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/'))

gulp.src([
    './src/libs/**/*.js',
    './src/layout/container.js',
    './src/layout/section.js',
    './src/elements/icon.js',
    './src/elements/loader.js',
    './src/elements/**/*.js',
    './src/components/button.js',
    './src/components/carousel.js',
    './src/components/showcase.js',
    './src/components/**/*.js',
    ])
    .pipe(replace(/^import.*/gm, ''))
    .pipe(replace(/export[^\n]*/g, ''))
    .pipe(concat('trds.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))