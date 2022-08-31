<?php
$name = $_POST['nombre'];
$lastName = $_POST['apellido'];
$business = $_POST['empresa'];
$mail = $_POST['email'];
$rol = $_POST['rol'];
$pais = $_POST['pais'];
$message = $_POST['message'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message = "de la empresa: " . $business . " \r\n";
$message = "su rol es: " . $rol . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "País de origen de la empresa: " . $business . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'info@agree.ag';
$asunto = 'Mensaje agreemarket.com';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>