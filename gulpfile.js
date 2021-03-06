// Generated by CoffeeScript 1.12.5
var cache, chmod, concat, del, execf, gulp, image, log, replace, seq, util, zip;

gulp = require('gulp');

util = require('gulp-util');

seq = require('run-sequence');

cache = require('gulp-cache');

concat = require('gulp-concat');

chmod = require('gulp-chmod');

image = require('gulp-imagemin');

del = require('del');

replace = require('gulp-replace');

zip = require('gulp-vinyl-zip');

execf = require('child_process').exec;

log = console.log;

gulp.task('dist:lua', function() {
  return gulp.src('dist/**/*.lua').pipe(replace(/dev_enable\(\)[\s\S]*?dev_disable\(\)/gi, function(match) {
    util.log("Development block removed:");
    util.log(match);
    return "";
  })).pipe(gulp.dest('dist'));
});

gulp.task('dist:images', function() {
  return gulp.src('dist/**/*.+(png|jpg|jpeg|gif|svg)').pipe(cache(image({
    interplaced: true
  }))).pipe(gulp.dest('dist'));
});

gulp.task('dist:vendor', function() {
  return del("dist/**/*.moon");
});

gulp.task('copy:buildfiles', function() {
  return gulp.src('buildfiles/**/*').pipe(gulp.dest('build'));
});

gulp.task('copy:dist', function() {
  return gulp.src('app/**/*').pipe(gulp.dest('dist'));
});

gulp.task('clean:build', function() {
  return del('build');
});

gulp.task('clean:dist', function() {
  return del('dist');
});

gulp.task('package:love', function() {
  return gulp.src('dist/**/*').pipe(zip.dest('build/love/star-simulator.love'));
});

gulp.task('exe:linux32', function() {
  return gulp.src(['build/linux32/star-simulator', 'build/love/star-simulator.love']).pipe(concat('star-simulator')).pipe(chmod(0x1ed)).pipe(gulp.dest('build/linux32'));
});

gulp.task('exe:linux64', function() {
  return gulp.src(['build/linux64/star-simulator', 'build/love/star-simulator.love']).pipe(concat('star-simulator')).pipe(chmod(0x1ed)).pipe(gulp.dest('build/linux64'));
});

gulp.task('exe:win32', function() {
  return gulp.src(['build/win32/star-simulator.exe', 'build/love/star-simulator.love']).pipe(concat('star-simulator.exe')).pipe(chmod(0x1ed)).pipe(gulp.dest('build/win32'));
});

gulp.task('exe:win64', function() {
  return gulp.src(['build/win64/star-simulator.exe', 'build/love/star-simulator.love']).pipe(concat('star-simulator.exe')).pipe(chmod(0x1ed)).pipe(gulp.dest('build/win64'));
});

gulp.task('exe', ['exe:linux32', 'exe:linux64', 'exe:win32', 'exe:win64']);

gulp.task('zip:linux32', function() {
  return gulp.src(['build/linux32/**/*']).pipe(zip.dest('build/linux32.zip'));
});

gulp.task('zip:linux64', function() {
  return gulp.src(['build/linux64/**/*']).pipe(zip.dest('build/linux64.zip'));
});

gulp.task('zip:win32', function() {
  return gulp.src(['build/win32/**/*']).pipe(zip.dest('build/win32.zip'));
});

gulp.task('zip:win64', function() {
  return gulp.src(['build/win64/**/*']).pipe(zip.dest('build/win64.zip'));
});

gulp.task('zip', ['zip:linux32', 'zip:linux64', 'zip:win32', 'zip:win64']);

gulp.task('build', function() {
  return seq(['clean:build', 'clean:dist'], ['copy:buildfiles', 'copy:dist'], ['dist:lua', 'dist:images'], 'dist:vendor', 'package:love', 'exe', 'zip');
});

gulp.task('default', ['build']);
