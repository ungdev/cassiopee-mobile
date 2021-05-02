# Cassiopee-Mobile

Mobile app for UTT's Gala : Cassiopée

## Requirement :bangbang: :

- React Native with Expo

## Installation :hammer: :

1. Clone repository

- ```bash
  git clone https://github.com/ungdev/cassiopee-mobile
  ```

- ```bash
  cd cassiopee-mobile
  ```

2. Install Node.js 

https://nodejs.org/en/ 

3. Install dependencies :

- ```bash
  npm install
  ```

4. Launch the app on Expo :

- ```bash
  npm start
  ```
  or
- ```bash
  expo start
  ```

(When you run expo start, the CLI uses Metro to bundle JavaScript for Android and iOS platforms)

5. Test on Android emulator :

- Install [Android Studio](https://developer.android.com/studio) and config AVD Manager with a virtual devices
- After Metro opens a page in your browser, press "a" in your terminal

6. Test on physical iOS/Android device :

- Install "Expo Go" on AppStore/PlayStore
- Flash QR-code in the terminal with you device to emulate app
- Enjoy !

## Documentations :closed_book: :green_book: :blue_book: :

- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo](https://docs.expo.io/)

## File Architecture :file_folder: :

- /assets/\* => icon, splash and pictures
- /node_modules/\* => dependencies, don't touch it
- /src/\* => All App' resources

  - /Bundles/\* => all the app's bundles, for example, Artists or Program which contain screens and specific elements
  - /components/\* => all react components that can be reused multiple times
  - /config/\* => access to API dev or prod
  - /lib/\* => API access path config
  - /navigation/\* => handle app navigation
  - /store/\* => local storage management (reducers ticket, favoris, token and changing room)
  - /translate/\* => application translation files

- App.js => entry point of the app
- app.json => app infos, like version (it's important to increase it when you publish a new version)
- README.md => this file

## Icons :star: :

- You can see all icons usable here : https://oblador.github.io/react-native-vector-icons/

## Version Syntax :100: :

Cassiopée is the new concept of GALA UTT. The original version is 2.0.0 (May 2020)

- First number will be incremented for each edition so +1 every year.
- Second number will be incremented for an update with new functionality in the same year (add Plan for exemple few weeks before event)
- Third number will be incremented for minor fix, text error or security patch

## Developper Contact :smirk: :

- My Name is [Quentin Letellier](https://www.quentinletellier.fr), student at the [University of Technology of Troyes](https://www.utt.fr). You can contact me on [LinkedIn](https://www.linkedin.com/in/quentin-letellier/).
