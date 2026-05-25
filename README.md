# Bonsai Sensei

A Japanese dojo themed beginner bonsai care app.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## Recommended next upgrade
Convert to a real mobile app using Capacitor:
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init "Bonsai Sensei" "com.holmes.bonsaisensei"
npm run build
npx cap add android
npx cap sync android
npx cap open android
```
Then build an Android App Bundle in Android Studio for Google Play.
