import fileInclude from "gulp-file-include"

export async function resolveHtml() {
    app.gulp.src(app.paths.src.resolveHtmlFiles)
        .pipe(fileInclude())
        .pipe(app.plugins.gulpReplace(`@${app.paths.src.assetsDirName}`, app.paths.build.assetsUrl))
        .pipe(app.plugins.gulpReplace(`sass`, 'css'))
        .pipe(app.gulp.dest(app.paths.build.htmlPagesDir))
}
