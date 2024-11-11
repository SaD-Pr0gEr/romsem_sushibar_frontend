export function server() {
    app.plugins.browserSync.init({
        server: {
            baseDir: app.paths.distPath,
            index: `pages/index.html`,
        },
        notify: false,
        port: 3000,
    })
}
