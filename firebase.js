// ===============================
// FIREBASE CONFIGURATION
// Paste your Firebase config object here!
// Follow the README instructions to get this.
// ===============================
const firebaseConfig = {
    // Replace the following with your actual Firebase config
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

let db = null;

// Only initialize Firebase if config is not placeholder
if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
    try {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
    } catch (error) {
        console.log("Firebase initialization failed:", error);
    }
}
