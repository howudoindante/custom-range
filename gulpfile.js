const { src, series, dest, parallel } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const path = require("path");
const del = require("del");
const source_folder = "/src/",
    destination_folder = "/build/";
const tap = require("gulp-tap");
const browsersync = require("browser-sync").create();
const gulp_watch = require("gulp-watch");
const include = require("gulp-include");
let isDev = false;


const browserify = require("browserify");

const buffer = require('vinyl-buffer');

const gulpPlumber = require("gulp-plumber");
const sourcemaps = require('gulp-sourcemaps');
const uglify = require("gulp-uglify");
const gulpif = require('gulp-if');
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");


const routes = {
    source: {
        html: path.join(__dirname, "index.html"),
        scss: path.join(__dirname, source_folder) + "styles/*.scss",
        js: [
            path.join(__dirname, source_folder, "scripts/*.js")
            , "!" + path.join(__dirname, source_folder, "scripts/_*.js")
        ],
    },
    build: {
        html: path.join(__dirname, destination_folder),
        directory: path.join(__dirname, destination_folder),
        css: path.join(__dirname, destination_folder, "css/"),
        js: path.join(__dirname, destination_folder, "js/")
    },
    watch: {
        html: path.join(__dirname, "index.html"),
        scss: path.join(__dirname, source_folder, "styles/*.scss"),
        js: path.join(__dirname, source_folder, "scripts/*.js")
    },
};

function setEnv() {
    isDev = process.argv.includes("--dev");
}

setEnv();

function BSYNC() {
    browsersync.init({
        server: {
            baseDir: routes.build.directory,
        },
        files: [
            Object.values(routes.build),
            {
                match: [Object.values(routes.build)],
                fn() {
                    this.reload();
                }
            }
        ],
        port: 3000,
        open: false,
    });
}

function HTML() {
    return src(routes.source.html)
        .pipe(dest(routes.build.html))
        .pipe(browsersync.stream());
}

function SCSS() {
    return src(routes.source.scss)
        .pipe(scss().on('error', scss.logError))
        .pipe(gulpif(isDev, sourcemaps.init()))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(gulpif(isDev, sourcemaps.write()))
        // .pipe(
        //     rename(function (path) {
        //         path.basename = path.dirname;
        //     })
        // )
        .pipe(dest(routes.build.css))



        .pipe(browsersync.stream());
}


function WATCH() {
    gulp_watch([routes.watch.html], HTML);
    gulp_watch([routes.watch.scss], SCSS);
    gulp_watch([routes.watch.js], JAVASCRIPT);
}

function JAVASCRIPT() {
    return src(routes.source.js, { read: false })
        .pipe(tap(function (file) {
            file.contents = browserify(file.path, { debug: isDev }).transform("babelify").bundle();
        }))
        .pipe(gulpPlumber())
        // .pipe(
        //     rename(function (path) {
        //         path.basename = path.basename + ".min";
        //     })
        // )
        .pipe(buffer())
        .pipe(gulpif(isDev, sourcemaps.init({ loadMaps: true })))
        .pipe(uglify())
        .pipe(gulpif(isDev, sourcemaps.write()))
        .pipe(dest(routes.build.js))
        .on("error", console.log)
        .pipe(browsersync.stream());
}


async function CLEAN() {
    await del.sync([routes.build.directory]);
}

const BUILD = series(CLEAN, SCSS, JAVASCRIPT, HTML);


const TASKS = isDev ? parallel(BUILD, WATCH, BSYNC) : parallel(BUILD);


exports.SCSS = SCSS;
exports.JAVASCRIPT = JAVASCRIPT;
exports.HTML = HTML;
exports.BUILD = BUILD;
exports.CLEAN = CLEAN;
exports.TASKS = TASKS;
exports.default = TASKS;