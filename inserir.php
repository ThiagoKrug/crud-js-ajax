<?php

require_once "conexao.php";
$conexao = conectar();

$usuario = json_decode(file_get_contents("php://input"));
//var_dump($usuario);die;
if ($usuario->id_usuario == "") {
    $sql = "INSERT INTO usuario 
        (nome, email, senha)
        VALUES 
        ('$usuario->nome', 
        '$usuario->email', 
        '$usuario->senha')";
} else {
    $sql = "UPDATE usuario SET 
        nome='$usuario->nome',
        email='$usuario->email',
        senha='$usuario->senha'
        WHERE id_usuario = $usuario->id_usuario";
}
executarSQL($conexao, $sql);

$usuario->id_usuario = mysqli_insert_id($conexao);
echo json_encode($usuario);
