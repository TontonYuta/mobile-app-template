@echo off
cd /d %~dp0

echo ==========================================
echo        TONTONYUTA - ONE CLICK APK
echo ==========================================

REM --------------------------------------------
REM 1. Kiem tra NodeJS
REM --------------------------------------------
where node >nul 2>nul
if %errorlevel% neq 0 (
echo ERROR: NodeJS chua duoc cai!
pause
exit /b
)

REM --------------------------------------------
REM 2. Cai Node packages
REM --------------------------------------------
echo [1/7] Cai thu vien NodeJS...
call npm install

REM --------------------------------------------
REM 3. Cai Capacitor
REM --------------------------------------------
echo [2/7] Cai Capacitor...
call npm install @capacitor/core @capacitor/cli @capacitor/android

REM --------------------------------------------
REM 4. Tao capacitor.config.json neu chua co
REM --------------------------------------------
if not exist capacitor.config.json (
echo [3/7] Tao cau hinh Capacitor...
call npx cap init "AOF Math Tutor AI" "com.tontonyuta.aofmath"
)

REM --------------------------------------------
REM 5. Dam bao webDir = dist
REM --------------------------------------------
echo [4/7] Kiem tra cau hinh Capacitor...

powershell -Command "(Get-Content capacitor.config.json) -replace '"webDir":\s*".*"','"webDir":"dist"' | Set-Content capacitor.config.json"

REM --------------------------------------------
REM 6. Tao Android project neu chua co
REM --------------------------------------------
if not exist android (
echo [5/7] Tao Android project...
call npx cap add android
)

REM --------------------------------------------
REM 7. Build Web
REM --------------------------------------------
echo [6/7] Build Web (Vite)...
call npm run build

REM --------------------------------------------
REM 8. Sync Capacitor
REM --------------------------------------------
echo [7/7] Dong bo Capacitor...
call npx cap sync

REM --------------------------------------------
REM 9. Build APK
REM --------------------------------------------
echo Dang build APK...
cd android
call gradlew.bat assembleDebug --daemon
cd ..

echo ==========================================
echo        BUILD APK HOAN TAT
echo ==========================================

start explorer "android\app\build\outputs\apk\debug"

pause
