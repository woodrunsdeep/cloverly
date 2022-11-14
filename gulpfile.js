const gulp = require('gulp');
const postcss = require('gulp-postcss');
const pimport = require('postcss-import');
const postcssMixin = require('postcss-mixins');
const postcssNested = require('postcss-nested');

const css = () => gulp.src('src/css/style.css')
    .pipe(postcss([
		pimport(),
		postcssMixin(),
		postcssNested(),
    ]))
    .pipe(gulp.dest('dist/css'));

exports.css = css;