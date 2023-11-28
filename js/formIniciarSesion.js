import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const formIniciarSesion=document.getElementById("IniciarSesionForm")

formIniciarSesion.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const email=formIniciarSesion['txtEmail'].value;
    const password=formIniciarSesion['txtPassword'].value;
    try {
        await signInWithEmailAndPassword(auth, email, password);
        const ventanaIniciarSesion=document.getElementById('iniciarSesionModal');
        const modal=bootstrap.Modal.getInstance(ventanaIniciarSesion);
        
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