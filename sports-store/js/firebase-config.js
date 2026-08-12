// ============================================
// STEELERS FAN CLUB QRO — Firebase Config
// Proyecto: steelers-nation-queretaro
// ============================================
const firebaseConfig = {
  apiKey: "AIzaSyDZAD_rAdj8OvuoswoU3Tqdj8sGgNaaOwg",
  authDomain: "steelers-nation-queretaro.firebaseapp.com",
  projectId: "steelers-nation-queretaro",
  storageBucket: "steelers-nation-queretaro.firebasestorage.app",
  messagingSenderId: "120474707665",
  appId: "1:120474707665:web:e8ef34f21110732293c7f0"
};

firebase.initializeApp(firebaseConfig);

window.db      = firebase.firestore();
window.auth    = firebase.auth();
window.storage = firebase.storage();

