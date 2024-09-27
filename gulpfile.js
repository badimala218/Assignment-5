var {src, dest, watch} = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function css() {
    return src('src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/styles'))
};

exports.default = function() {
    watch('src/*.scss', css);
};