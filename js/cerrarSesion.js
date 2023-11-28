import { signOut } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { auth } from "./firebase.js";

const menuCerrarSesion=document.getElementById("menuCerrarSesion");

menuCerrarSesion.addEventListener('click', async ()=>{
    console.log("Se cerró la sesión");
    await signOut(auth);
})