# Astuces

## Lien vers l'ensemble des Repositories du cours:
[Dossier Partagé](https://cegepedouardmontpetit-my.sharepoint.com/:f:/g/personal/valerie_turgeon_cegepmontpetit_ca/Ev4ITRcpwldAjM-n1KMv0foBOD-QC6h-636O8b6xes0h6Q?e=bKJfMd)
[GitHub Repositories](https://github.com/orgs/ProgWebTransFC/repositories)

## Grille de vérification mise en place Entity Framework
![Image](/autres/ListeVerification_EntityFramework.png)

## Commandes Git pour terminal
[GitKraken commandes Git](https://cegepedouardmontpetit.sharepoint.com/:b:/r/sites/EDU-E23-420BW5EM-06139/Documents%20partages/General/gitkraken-git-basics-cheat-sheet.pdf?csf=1&web=1&e=oaWhM2)
## Génération(scaffolding) d'un contrôleur avec la ligne de commande 
### Pratique lorsque l'on a des erreurs!!

Vous pouvez prendre le temps de lire les [notes de cours](/docs/01-cours/BRISE.md) ou alors suivre les directives suivantes


Pour générer le contrôleur et les vues d'un modèle (ou ViewModel), voici la commande si ça ne fonctionne pas avec l'interface graphique :

```
dotnet aspnet-codegenerator controller -m NOM_COMPLET_DU_MODEL_AVEC_NAMESPACE -dc NOM_COMPLET_DU_CONTEXT_AVEC_NAMESPACE -scripts -udl -outDir Controllers -name NOM_DU_CONTROLEUR -async -actions
```

Il faut biensûr remplacer **NOM_COMPLET_DU_MODEL_AVEC_NAMESPACE**, **NOM_COMPLET_DU_CONTEXT_AVEC_NAMESPACE** et **NOM_DU_CONTROLEUR**

Voici des exemples de valeurs :

| Variable | Valeur | 
| :--- | :--- |
| NOM_COMPLET_DU_MODEL_AVEC_NAMESPACE | PresseMots_Web.Models.User |
| NOM_COMPLET_DU_CONTEXT_AVEC_NAMESPACE | PresseMots_Web.Models.Data.PresseMotsDbContext |
| NOM_DU_CONTROLEUR | UsersController |

On aurait donc ceci avec notre exemple :

```
dotnet aspnet-codegenerator controller -m PresseMots_Web.Models.User -dc PresseMots_Web.Models.Data.PresseMotsDbContext -scripts -udl -outDir Controllers -name UsersController -async -actions
```

Si vous avez une erreur comme quoi la commande n'est pas trouvée, vous devez installer l'outil (déjà installé sur les postes du CEGEP)

```
dotnet tool install --global dotnet-aspnet-codegenerator --version 6.0.21
```

:::warning

Cette commande doit être effectué dans la console de VisualStudio et il faut s'assurer de faire un cd NOM_DU_PROJET (PresseMots_Web dans l'exemple) avant de rouler la commande.

:::

## Si vous avez une erreur d'accès causer par un certificat auto généré dans votre navigateur!

Il y a un problème avec les certificats auto généré qui arrive sur certains postes de travail. Si vous avez un problème de certificat non sécure en localhost avec votre navigateur, vous avec 2 choix:

- Dans **chrome** Utiliser cette ligne  : chrome://flags/#allow-insecure-localhost et mettre Allow invalid certificates for resources loaded from localhost (ça devrait être la première option) à **enable** et redémarrer Chrome.
- Sinon vous pouvez également utilisez Firefox à la place et il vous permet de choisir d'ignorer l'avertissement et de vivre dangereusement!! Voici comment changer de navigateur dans Visual Studio:

![image](/autres/selectionNavigateurVisualStudio.png)


