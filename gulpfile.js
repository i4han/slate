
if ( 'undefined' === typeof Meteor ) {
    let bypassRequire = require
    let path = bypassRequire('path')
    let gulp = bypassRequire('gulp')
    let jsxHtml = bypassRequire('gulp-jsx-html')
    let angularJsx = bypassRequire('gulp-angular-jsx')

    gulp.task('jsx-html', () => 
        gulp.src( './.client/**/*.js', {base: './.client'} )
            .pipe( jsxHtml() )
            .pipe( gulp.dest('./client') )
    )

    gulp.task('watch:js', function () {
        gulp.watch('./.client/**/*.js', ['jsx-html'])
    })

    gulp.task('default', ['jsx-html']
    )
}
