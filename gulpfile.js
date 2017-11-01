
let path = require('path')
let gulp = require('gulp')
let rename = require('gulp-rename')
let jsxHtml = require('gulp-jsx-html')
let angularJsx = require('gulp-angular-jsx')

gulp.task('jsx-html', () => 
    gulp.src( './src/**/*.jsx', {base: './src'} )
        .pipe( jsxHtml() )
        .pipe( rename({ extname: ".js" }) )
        .pipe( gulp.dest('./client') )
)

gulp.task('watch:js', function () {
    gulp.watch('./src/**/*.jsx', ['jsx-html'])
})

gulp.task('default', ['jsx-html'])
