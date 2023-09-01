@echo off
setlocal

:: Cloner le dépôt Git depuis l'URL spécifiée dans le répertoire actuel
git clone https://github.com/Sandro642/DistroSwitch.git .

:: Vérifier si le clonage a réussi
if %errorlevel% equ 0 (
    echo Le dépôt a été cloné avec succès dans le répertoire actuel.
    :: Supprimer ce script une fois terminé
    del %0
) else (
    echo Échec du clonage du dépôt.
)

endlocal
