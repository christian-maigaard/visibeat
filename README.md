# visibeat

A React Native app built with [Expo](https://expo.dev) and [Expo Router](https://expo.github.io/router).

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Xcode](https://developer.apple.com/xcode/) (iOS development, macOS only)
- An iOS simulator or physical device

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Build and install the dev client**

   ```bash
   npm run ios
   # or for Android:
   npm run android
   ```

   This project uses [CNG](https://docs.expo.dev/workflow/continuous-native-generation/) (Continuous Native Generation) with `expo-dev-client`. Expo generates the native `ios/`/`android/` folders from `app.json` and compiles a custom development app — your personal replacement for Expo Go, with your exact native dependencies baked in. The generated folders are not committed to git.

   **You only need to do this once**, or again whenever you add a package that includes native code.

3. **Start the dev server** for day-to-day development

   ```bash
   npm start
   ```

   The dev client app on your simulator connects to Metro and loads your JS bundle. Native code changes require step 2 again; JS/UI changes just need `npm start`.

## Project structure

- [src/](src/) — app source code
- [app/](app/) — file-based routes (Expo Router)
- [assets/](assets/) — images, fonts, and other static files

## Other commands

| Command | Description |
|---|---|
| `npm start` | Start the Metro bundler |
| `npm run ios` | Build and run on iOS |
| `npm run android` | Build and run on Android |
| `npm run web` | Run in browser |
| `npm run lint` | Lint with ESLint |
