var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-minify-css');
var cssver = require('gulp-make-css-url-version'); 
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('sass',function(){
	gulp.src('css/*.scss')
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(sass())
		.pipe(gulp.dest('css'))
});

gulp.task('cssmin', function () {
    gulp.src('css/*.css')
    	.pipe(cssver())
        .pipe(cssmin({
        	advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('concat', function () {
    gulp.src(['js/backtop.js','js/scrollto.js','js/main.js'])
        .pipe(concat('all.js'))//合并后的文件名
        .pipe(gulp.dest('js'));
});

gulp.task('jsmin', function () {
    gulp.src(['js/backtop.js','js/scrollto.js','js/main.js'])
        .pipe(uglify({
        	mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true,//类型：Boolean 默认：true 是否完全压缩
            preserveComments: 'all' //保留所有注释
        }))
        .pipe(gulp.dest('js'));
});

gulp.task('sassWatch',function(){
	gulp.watch('css/*.scss',['sass']);
}); 