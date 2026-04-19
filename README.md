# VisiBeat

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

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm start`       | Start the Metro bundler  |
| `npm run ios`     | Build and run on iOS     |
| `npm run android` | Build and run on Android |
| `npm run web`     | Run in browser           |
| `npm run lint`    | Lint with ESLint         |

---

## About

Visibeat is a metronome app with an iPod-style click wheel for adjusting BPM, a full-screen beat visualiser, and two distinct tick sounds (accent on beat 1, regular on beats 2–4). It's built with Expo and requires a development build due to native dependencies.

---

## Known Limitations & Tradeoffs

- **Time signature is hardcoded to 4/4** — the beat count is wired into the architecture but there is no UI to change it yet
- **Ticks stop when app is in background** — background audio mode is not implemented
- **Limited customisation overall** — no tap tempo or colour themes, along with other features that users would expect from a metronome application.
- **Liquid Glass requires a real device** — the iOS simulator seems to not support the Liquid Glass effect, so the click wheel renders as a flat grey on simulator. It looks as intended on a physical iOS 26+ device.

## What I'd Improve

**UI/UX**

- Haptic feedback and a visual bounce when the user reaches min/max BPM
- Tap tempo: tap the screen repeatedly to set BPM by feel
- Dynamic time signature selector (3/4, 6/8, 5/4, etc.)
- Colour theme picker — the accent colour is currently fixed to green
- Revisit the center button — explore a more distinct visual state between play and pause
- Android is lacking some attention, since the vision was creating something visually interesting with background lights, animated linear gradients in combination with liquid glass.
- I'd like to explore a more liquid glass look and feel for the +/- buttons

**Technical**

- Background audio playback so the metronome keeps ticking with the screen locked
- The metronome timing happens of the main thread, so it's not blocked by react renders, but I gather that using something like AudioContext, it could be more accurate. Something to investigate in the future.
