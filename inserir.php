<?php

require_once "conexao.php";
$conexao = conectar();

$usuario = json_decode(file_get_contents("php://input"));
var_dump($usuario);

echo $usuario->id_usuario;

$sql = "INSERT INTO usuario 
        (id_usuario, nome, email, senha)
        VALUES 
        ($id_usuario, '$nome', '$email', '$senha')";

executarSQL($conexao, $sql);