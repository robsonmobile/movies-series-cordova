# Movies & Series App
###### Projeto Final | Módulo 1 / Bloco Multiplataforma | Infnet Pós Graduação

Movies & Series is a social mobile app

## Frameworks & Libraries

* [Apache Cordova](https://cordova.apache.org/)
* [JQuery](https://jquery.com/)
* [Fastclick](https://github.com/ftlabs/fastclick)
* [Framework7](http://www.idangero.us/framework7/) for UI (Android and iOS)
* [OMDB API](http://www.omdbapi.com/) for movies and series content
* [OpenFB](https://github.com/ccoenraets/OpenFB) for Facebook integration
* [Font Awesome](http://fortawesome.github.io/Font-Awesome/) for icons
* [Parse](https://www.parse.com/) as backend for social/commentary

## Device Sensors/Functionalities Used

* Local Storage
    User does not need to login multiple times, as credentials are saved on local storage. App data is also saved on local storage.
* Camera
* OAuth
    Facebook Login
* Rest API


## Plugins Used

* [cordova-plugin-whitelist](https://github.com/apache/cordova-plugin-whitelist)
* [cordova-plugin-inappbrowser](https://github.com/apache/cordova-plugin-inappbrowser), used on the Facebook Login only
* [cordova-plugin-dialogs](https://github.com/apache/cordova-plugin-dialogs) for native alert dialogs
* [cordova-plugin-camera](https://github.com/apache/cordova-plugin-camera), used for the user to take pictures and add them to their comments

> To add plugins use the following command on terminal:
> ```
> cordova plugin add <plugin-name> --save
> ```
> To list plugins installed use the following command on terminal:
> ```
> cordova plugin list
> ```

## Pre-Requisites

* [Node.js](https://nodejs.org/) installed
* [Apache Cordova](https://cordova.apache.org/) installed

> To install Apache Cordova use the following command on terminal:
> ```
> npm install -g cordova
> ```

## Steps to run

1. Clone repository
2. Add platforms using: ```cordova platforms add <browser/android/ios>```
3. Run app using: ```cordova run <browser/android/ios>```

* * *

*Authors: Beatriz Macedo & Fernando Santos*
