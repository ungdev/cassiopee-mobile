# Cassiopee-Mobile

Mobile app for UTT's Gala : Cassiopée

## Requirement :

- React Native with expo

## Installation :

1. clone repository

- git clone https://github.com/ungdev/cassiopee-mobile
- cd cassiopee-mobile

2. install dependencies :

- npm

3. launch the app on expo :

- npm start

## File Architecture :

- /assets/\* => icon and splash
- /components/\* => all react components that can be reused multiple times
- /navigation/\* => handle app navigation
- /Bundles/\* => all the app's bundles, for example, Artists or Program
- /node_modules/\* => dependencies, dont touch it
- /screens/\* => pages, content, etc (other than bundles')
- App.js => entry point of the app
- app.json => app infos, like version (it's important to increase it when you publish a new version)
- README.md => this file
