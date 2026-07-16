const firebaseConfig = {
  apiKey: "AIzaSyB49_QBeMAvujNdHNfeYDNyFzbCGhN8CFM",
  authDomain: "thisorthat-3899d.firebaseapp.com",
  projectId: "thisorthat-3899d",
  storageBucket: "thisorthat-3899d.firebasestorage.app",
  messagingSenderId: "360798314988",
  appId: "1:360798314988:web:cdfe8081ef26bdcf39a0c9"
};

let db = null;

try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log("Firebase initialized successfully!");
} catch (error) {
    console.error("Firebase initialization failed:", error);
}
