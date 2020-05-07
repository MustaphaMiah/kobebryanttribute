"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("sass", function () {
  gulp
    .src("app/scss/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("app/css"));
});
gulp.task("sass:watch", function () {
  gulp.watch("app/scss/app.scss", ["sass"]);
});
