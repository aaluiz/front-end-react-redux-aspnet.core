var gulp = require('gulp')
var copy = require('recursive-copy')

gulp.task('default', ()=>{
    var options = {
        overwrite: true
    }

    return copy('build', '../wwwroot', options )
    .then(function(results) {
        console.info('Copied ' + results.length + ' files');
    })
    .catch(function(error) {
        console.error('Copy failed: ' + error);
    });
})