export async function copyStatic() {
    app.gulp.src(app.paths.src.copyStaticFiles)
        .pipe(app.gulp.dest(app.paths.build.assetsDir))
}
