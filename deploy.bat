@echo off
echo Deploying website to GitHub Pages...

REM Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: Git is not installed or not in PATH.
    echo Please install Git from https://git-scm.com/downloads
    exit /b 1
)

REM Initialize git repo if not already done
if not exist .git (
    echo Initializing git repository...
    git init
    git branch -M main
)

REM Add remote if not already set
git remote -v | findstr "origin" >nul
if %ERRORLEVEL% NEQ 0 (
    echo Adding GitHub remote...
    git remote add origin https://github.com/deveus06/deveus06.github.io.git
)

REM Add all files to git
echo Adding files to git...
git add .

REM Commit changes
echo Committing changes...
set /p COMMIT_MSG="Enter commit message (or press Enter for default): "
if "%COMMIT_MSG%"=="" set COMMIT_MSG="Update website content"
git commit -m "%COMMIT_MSG%"

REM Push to GitHub
echo Pushing to GitHub...
git push -u origin main

echo Deployment complete!
echo Your website should be live at https://deveus06.github.io/
echo (It may take a few minutes for changes to appear)
pause 