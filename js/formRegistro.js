import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const formRegistro=document.getElementById("registroform")

formRegistro.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const email=formRegistro['txtEmail'].value;
    const password=formRegistro['txtPassword'].value;
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((credencialesUsuario)=>{
            sendEmailVerification (auth.currentUser)});
        const ventanaRegistro=document.getElementById('RegistrarseModal');
        const modal=bootstrap.Modal.getInstance(ventanaRegistro);
        
        modal.hide(); 
    } catch (error) {
        console.log(error.code);
        
        Toastify({
            text: "Ocurrió un error:"+error.code,
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            style: {
                background: '#FF4136'
            }
            }).showToast();
    }
    

})