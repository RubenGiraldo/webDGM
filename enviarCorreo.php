<?php

header("content-type: text/html;charset='utf-8'");

$nombre = htmlentities($_POST['nombre']);
$email = htmlentities($_POST['email']);
$mensaje = htmlentities($_POST['mensaje']);
$direccion_ip = $_SERVER['REMOTE_ADDR'];

$header = 'From: '.$email." \n";
$header .= "X-Mailer: PHP/".phpversion()." \n";
$header .= "content-type: text/plain";
$mensaje = "Este mensaje fue enviado" .$nombre." \n";
$mensaje = "Su email es".$email." \n";
$mensaje .= "Su mensaje es".$mensaje." \n";
$mensaje .= "desde la IP" .$direccion_ip ." \n";
$para = "rubengiraldomurcia@gmail.com";
$asunto = "Mensaje del sitio web";

if(mail($para,$asunto, utf8_decode($mensaje),$header)){
	echo "Mensaje enviado gracias por comunicarse con nosotros";
}

else{
	echo "Error en el envio";
}

?>	

