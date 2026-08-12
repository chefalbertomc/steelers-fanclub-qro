// ============================================
// CATCH SPORTS — Firebase Config
// Proyecto: catch-sports
// ============================================
const firebaseConfig = {
  apiKey: "AIzaSyArlH7H52SDcMk782LuGEhq9Qv2seAsuew",
  authDomain: "catch-sports.firebaseapp.com",
  projectId: "catch-sports",
  storageBucket: "catch-sports.firebasestorage.app",
  messagingSenderId: "986639523793",
  appId: "1:986639523793:web:9c16bad61cae33774ecaf0"
};

firebase.initializeApp(firebaseConfig);

window.db      = firebase.firestore();
window.auth    = firebase.auth();
window.storage = firebase.storage();
