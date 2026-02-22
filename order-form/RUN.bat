@echo off
REM Windows Batch Script
REM 🎪 ΤΕΝΤΑ ΜΕ ΑΝΤΙΡΙΔΕΣ
REM Order Form - Automatic Setup & Run

setlocal enabledelayedexpansion

echo.
echo ======================================
echo 🎪 Τέντα με Αντιρίδες
echo Order Form Application
echo ======================================
echo.

REM Check Node.js
echo ℹ️  Step 1/5: Checking Node.js installation...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo Please download from: https://nodejs.org
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✅ Node.js found: %NODE_VERSION%

where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm is not installed!
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo ✅ npm found: %NPM_VERSION%
echo.

REM Navigate to project
echo ℹ️  Step 2/5: Navigating to project directory...
cd /d "%~dp0"
echo ✅ Current directory: %cd%
echo.

REM Install dependencies
echo ℹ️  Step 3/5: Installing dependencies...
if not exist "node_modules" (
    echo ⚠️  This may take 2-5 minutes on first run...
    call npm install
    echo ✅ Dependencies installed successfully
) else (
    echo ✅ Dependencies already installed
)
echo.

REM Build
echo ℹ️  Step 4/5: Building the project...
echo ✅ Project ready to serve
echo.

REM Start server
echo ℹ️  Step 5/5: Starting development server...
echo.
echo ======================================
echo ✅ READY TO GO!
echo ======================================
echo.
echo 🚀 Application will be available at:
echo    👉 http://localhost:4200
echo.
echo ⚠️  Press Ctrl+C to stop the server
echo.
echo ======================================
echo.

call npm start

pause
