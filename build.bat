@ECHO OFF

REM COPY OVER SOME OF SOURCE
REM TODO: Convert this to Webpack
echo f | xcopy /F /Y /E src\index.html dist\index.html
echo d | xcopy /F /Y /E src\js dist\js
echo d | xcopy /F /Y /E src\img dist\img

REM Compile SCSS
sass --no-source-map src/scss/main.scss:dist/css/main.css