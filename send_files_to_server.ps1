Write-Host -ForegroundColor "Yellow" -BackgroundColor "Black" "[DEBUG] Sending $pwd to Blumemail Frontpage Server."
scp -P 22022 -r .\ root@209.74.71.217:/blumemail/

Write-Host -ForegroundColor "Yellow" -BackgroundColor "Black" "[DEBUG] The files should've been sent successfully."