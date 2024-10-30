import * as dartSass from 'sass'
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export async function compileSass() {
    app.gulp.src(app.paths.src.sassFiles, {sourcemaps: true})
        .pipe(sass(
            {outputStyle: "compressed"}
        ))
        .pipe(app.gulp.dest(app.paths.build.cssDir))
}
