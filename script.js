const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click",()=>{
   container.classList.remove("toggle");
});
btnSignUp.addEventListener("click",()=>{
   container.classList.add("toggle");
});
document.getElementById("miFormulario").addEventListener("submit"), function(event) {
   event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

   let Nombre = document.getElementById("Nombre").value;
   let email = document.getElementById("edad").value;
   let password = document.getElementById(password).value

   if (nombre && email && password) {
   alert("Formulario enviado con éxito!\Nombre: " + Nombre + "\email: " + email + "\password:" + password );
 fetch() 
   } else {
     alert("Por favor, completa todos los campos."); }
 }
//funcionalidad de formulario//
document.addEventListener('DOMContentLoaded', function() {
   // Toggle entre formularios
   document.getElementById('btn-sign-up').addEventListener('click', function() {
       document.querySelector('.sign-in').style.display = 'none';
       document.querySelector('.sign-up').style.display = 'block';
   });

   document.getElementById('btn-sign-in').addEventListener('click', function() {
       document.querySelector('.sign-up').style.display = 'none';
       document.querySelector('.sign-in').style.display = 'block';
   });

   // Validación básica del lado del cliente
   document.querySelector('.sign-in').addEventListener('submit', function(e) {
       const email = this.querySelector('input[name="email"]').value;
       const password = this.querySelector('input[name="password"]').value;
       
       if (!email || !password) {
           e.preventDefault();
           alert('Por favor completa todos los campos');
       }
       
   });
});
