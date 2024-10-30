export function server() {
    app.plugins.browserSync.init({
        server: {
            baseDir: app.paths.distPath
        },
        notify: false,
        port: 3000,
    })
}
