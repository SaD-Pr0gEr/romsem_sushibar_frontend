import gulp from "gulp";
import {paths} from "./_gulp/config/path.js";
import {copyStatic} from "./_gulp/tasks/copy.js";
import {reset} from "./_gulp/tasks/reset.js";
import {resolveHtml} from "./_gulp/tasks/html.js";
import {plugins} from "./_gulp/config/plugins.js";
import {server} from "./_gulp/tasks/server.js";
import {compileSass} from "./_gulp/tasks/sass.js";

global.app = {
    paths: paths,
    gulp: gulp,
    plugins: plugins,
}

const parallelTasks = gulp.parallel(copyStatic, resolveHtml, compileSass)

function watcher() {
    gulp.watch(paths.watch.files, {delay: 3000}, gulp.series(reset, parallelTasks))
}

const dev = gulp.series(reset, parallelTasks, gulp.parallel(watcher, server));

gulp.task("default", dev);
