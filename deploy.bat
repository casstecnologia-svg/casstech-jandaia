@echo off
chcp 65001 >nul
cd /d "C:\Users\USUARIO\Desktop\SITE CASTECH"
echo ============================================
echo   Deploy direto na Netlify (sem GitHub)
echo ============================================
echo.
echo [1/2] Compilando o site...
call npm run build
if errorlevel 1 (
  echo.
  echo ERRO no build. Envie o texto do erro para analise.
  pause
  exit /b 1
)
echo.
echo [2/2] Enviando para a Netlify...
call npx --yes netlify-cli deploy --prod --dir=dist
echo.
echo Concluido. Se aparecer a URL do site acima, o deploy foi feito.
timeout /t 15 >nul
