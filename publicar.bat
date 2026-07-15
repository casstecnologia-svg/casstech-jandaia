@echo off
chcp 65001 >nul
cd /d "C:\Users\USUARIO\Desktop\SITE CASTECH"
echo ============================================
echo   Publicando site Casstech Jandaia...
echo ============================================

REM Remove travas antigas do git, se existirem (destrava commits presos)
if exist ".git\index.lock" ( del /f /q ".git\index.lock" & echo Trava index.lock removida. )
if exist ".git\HEAD.lock" ( del /f /q ".git\HEAD.lock" & echo Trava HEAD.lock removida. )
if exist ".git\config.lock" ( del /f /q ".git\config.lock" )

git add -A
git commit -m "Atualizacao automatica do site"
git push origin main

echo.
echo Pronto! A Netlify vai reconstruir e publicar em ~1 minuto.
echo Voce pode fechar esta janela.
timeout /t 12 >nul
