import * as nodePath from "path"

const projectRootPath = nodePath.resolve()
const srcPath = `${projectRootPath}/src`
const distPath = `${projectRootPath}/dist`

export const paths = {
    build: {
        assetsUrl: `/static`,
        assetsDir: `${distPath}/static`,
        cssDir: `${distPath}/static/css`,
        htmlPagesDir: `${distPath}/pages`,
    },
    src: {
        assetsDir: `${srcPath}/assets`,
        assetsDirName: `assets`,
        gulpDir: `${projectRootPath}/gulp`,
        includeHtmlDir: `${srcPath}/include`,
        htmlPagesDir: `${srcPath}/pages`,
        copyStaticFiles: [
            `${srcPath}/assets/**/*.*`,
            `!${srcPath}/assets/sass/**/*.sass`,
        ],
        resolveHtmlFiles: [
            `${srcPath}/pages/**/*.html`,
        ],
        sassFiles: `${srcPath}/assets/sass/**/*.sass`
    },
    watch: {
        files: `${srcPath}/**/*.*`,
    },
    rootPath: projectRootPath,
    srcPath: srcPath,
    distPath: distPath,
}
