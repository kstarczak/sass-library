const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');


// buildStyes compliles sass
// source sass file is complied to css and piped into a destination folder
// to compile multiple scss files to css files change "index.scss" to "*.scss" for both functions (buildStyles and watchTask)
function buildStyles() {
    return src('sass/style.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html']}))
        .pipe(dest('css'))
}

function watchTask() {
    watch(['sass/*.scss', 'index.html'], buildStyles)
}


exports.default = series(buildStyles, watchTask)