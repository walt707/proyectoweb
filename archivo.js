const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.01:3306',
  user: 'root',
  password: 'walt25727520',
  database: 'esmeraldas'
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});
document.getElementById("formularioSuscripcion").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue
    const correo = document.getElementById("correo").value;

    if (correo.trim() === '') {
        alert('Por favor, ingresa un correo electrónico válido.');
    } else {
        alert(`¡Gracias por suscribirte con el correo: ${correo}!`);
    }
});
