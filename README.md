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
- /node_modules/\* => dependencies, dont touch it
- /src/\* => All App' resources

  - /Bundles/\* => all the app's bundles, for example, Artists or Program which contain screens and specific elements
  - /components/\* => all react components that can be reused multiple times
  - /config/\* => access to API
  - /images/\* => pictures locals in the App
  - /lib/\* => API config
  - /navigation/\* => handle app navigation

- App.js => entry point of the app
- app.json => app infos, like version (it's important to increase it when you publish a new version)
- README.md => this file
