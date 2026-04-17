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

2. **Create a dev build** (required — this project uses `expo-dev-client` and won't run in Expo Go)

   ```bash
   npm run ios
   # or for Android:
   npm run android
   ```

   This compiles the native app and installs it on your simulator/device. You only need to do this once, or again after adding new native dependencies.

3. **Start the dev server** for subsequent development sessions

   ```bash
   npm start
   ```

   Then press `i` to open iOS or scan the QR code with your device.

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
