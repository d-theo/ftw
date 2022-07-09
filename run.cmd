@ECHO OFF
CLS
ECHO 1. 10:00 ES
ECHO 2. 10:00 EN
ECHO 3. 14:00 ES
ECHO 4. 14:00 EN
ECHO 5. 18:00 ES
ECHO 6. 18:00 EN
ECHO.

CHOICE /C 12345 /M "Enter your choice:"

:: Note - list ERRORLEVELS in decreasing order
IF ERRORLEVEL 6 GOTO Dixhuiten
IF ERRORLEVEL 5 GOTO SwitchUser
IF ERRORLEVEL 4 GOTO Deuxen
IF ERRORLEVEL 3 GOTO Deuxes
IF ERRORLEVEL 2 GOTO Dixen
IF ERRORLEVEL 1 GOTO Dixes

:Dixes
CALL npm run fetch:10:es
GOTO END

:Dixen
CALL npm run fetch:10:en
GOTO END

:Deuxes
CALL npm run fetch:14:es
GOTO END

:Deuxen
CALL npm run fetch:14:en
GOTO END

:Dixhuites
CALL npm run fetch:18:es
GOTO END

:Dixhuiten
CALL npm run fetch:18:en
GOTO END

:END
ECHO Finito