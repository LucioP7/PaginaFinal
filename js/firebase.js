import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBdzi8qQFoX6uPKh8BBuyCPP414zAZ8f4k",
  authDomain: "paginafinall.firebaseapp.com",
  projectId: "paginafinall",
  storageBucket: "paginafinall.appspot.com",
  messagingSenderId: "81989225588",
  appId: "1:81989225588:web:a75a05518d279b900b1521"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log(app);
console.log(auth);