var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

/*---------------------------------------------------------------------------
 * Browser Sync
 ---------------------------------------------------------------------------*/
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("examples/**/*.html").on('change', browserSync.reload);
    gulp.watch("examples/**/*.css").on('change', browserSync.reload);
    gulp.watch("examples/**/*.js").on('change', browserSync.reload);
});


/*---------------------------------------------------------------------------
 * Default Watcher
 * - Launch the task before developing
 ---------------------------------------------------------------------------*/
gulp.task('default',['browser-sync']);
gulp.task('watch',['browser-sync']);
