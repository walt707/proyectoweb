<?php
// Conexión a la base de datos
$servidor = '127.0.01:3306';
$usuario = "root";
$contrasena = "walt257275"; 
$baseDatos = "esmeraldas";

$conn = new mysqli($servidorl, $usuario, $contrasena, $baseDatos);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$edad = $_POST['edad'];

// Insertar datos en la base de datos
$sql = "INSERT INTO usuarios (nombre, edad) VALUES ('$nombre', '$edad')";
if ($conn->query($sql) === TRUE) {
    echo "Datos insertados correctamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
