import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { auth } from "./firebase.js";

import "./formIniciarSesion.js"
import "./formRegistro.js"

const MenuDesconectado=document.querySelectorAll(".MenuDesconectado");
const MenuConectado=document.querySelectorAll(".MenuConectado");

onAuthStateChanged (auth, async (user)=>{
    if(user){
        if(user.emailVerified){

        MenuDesconectado.forEach(elemento=>elemento.style.display="none");
        MenuConectado.forEach(elemento=>elemento.style.display="block");
        }
        else{
            alert("Por favor verifique su correo electrónico para poder acceder a la plataforma");
            MenuDesconectado.forEach(elemento=>elemento.style.display="block");
            MenuConectado.forEach(elemento=>elemento.style.display="none");    
        }
    }
    else{
        MenuDesconectado.forEach(elemento=>elemento.style.display="block");
        MenuConectado.forEach(elemento=>elemento.style.display="none");
    }
    })