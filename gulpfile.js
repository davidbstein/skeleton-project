var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var minifyCss = require('gulp-cssnano');
var webpack = require('webpack-stream');
var path = require('path');
// sets what runs when 'gulp' is running naked
gulp.task('default', ['info', 'watch'], function(){
});

gulp.task('info', function(){
  console.log('\nrunning gulp defaults to command: gulp watch\n');
  console.log('\ncommands available: build, web, watch, dev, info\n');
  console.log('\nTODO: turn on webserver automatically')
});

function do_build(){
  console.log('rebuilding...');
  build_js();
  build_static();
  build_scss();
}

function build_js(){
  gulp.src('js/main.js')
    .pipe(webpack(
      {
        entry: './src/js/main.js',
        output: { path: __dirname, filename: 'bundle.js' },
        devtool: 'source-map',
        resolve: {
          alias: {js: __dirname + '/src/js'},
          root: [__dirname + '/src'],
          extensions: ['', '.js']
        },
        module: {
          loaders: [
            {
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'react', 'stage-2'],
                plugins: ['transform-object-rest-spread']
              }
            }
          ]
        },
      }
    ))
    .pipe(minify())
    .pipe(gulp.dest('dist/'))
}

function build_static(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
  gulp.src('static/**/*')
    .pipe(gulp.dest('dist/static'));
}

function build_scss() {
  gulp.src('src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
  gulp.src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style-min.css'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
}

gulp.task('web', ['build'], function () {
  //TODO
  console.log('TODO');
});

gulp.task('watch', ['build', 'web'], function () {
  gulp.watch('src/**/*', ['build']);
});

gulp.task('build', function() {
  do_build();
});
