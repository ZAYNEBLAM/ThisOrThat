
# This or That? - A Modern Web Game 🎮

A fun, responsive "This or That" web game built with HTML, CSS, Vanilla JavaScript, and Firebase Firestore.

## Project Structure
```
ThisOrThat/
├── index.html      # Main game page
├── results.html    # Admin results page
├── style.css       # Styles
├── script.js       # Game logic
├── firebase.js     # Firebase configuration
├── images/         # Placeholder images (replace with your own)
└── README.md       # This file
```

## Step 1: Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name your project and follow the setup wizard

## Step 2: Enable Firestore Database
1. In your Firebase project, go to "Firestore Database"
2. Click "Create Database"
3. Choose "Start in test mode" (for development, you can secure it later)
4. Select a location and click "Enable"

## Step 3: Get Firebase Configuration
1. In Firebase Console, click the gear icon ⚙️ → Project settings
2. Scroll down to "Your apps" section
3. Click "Add app" → Web app (</> icon)
4. Register your app (nickname, e.g., "this-or-that")
5. Copy the Firebase config object (starts with `const firebaseConfig = { ... }`)

## Step 4: Paste Firebase Config
1. Open `firebase.js`
2. Replace the placeholder config with your actual Firebase config
3. Save the file

## Step 5: Customize Your Questions
1. Open `script.js`
2. Find the `questions` array
3. Replace with your own questions, titles, and images!

## Step 6: Deploy to Vercel (Recommended)
1. Sign up for a [Vercel account](https://vercel.com/)
2. Install Vercel CLI: `npm i -g vercel`
3. In your project folder, run: `vercel`
4. Follow the prompts to deploy
5. Share your public link!

## Step 7 (Alternative): Deploy to Firebase Hosting
1. In Firebase Console, go to "Hosting"
2. Click "Get started"
3. Install Firebase CLI: `npm install -g firebase-tools`
4. Run `firebase login`
5. Run `firebase init`
6. Select "Hosting: Configure files for Firebase Hosting"
7. Choose your project
8. Set public directory to `.` (current directory)
9. Configure as a single-page app: No
10. Overwrite index.html: No
11. Run `firebase deploy`
12. Share your public link!

## Viewing Results
- Go to `https://your-deployed-url.com/results.html` to see all player answers!

## Important Notes
- For production use, remember to secure your Firestore rules!
- Test mode is only for development and expires after 30 days

