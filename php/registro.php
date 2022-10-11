<?php

    include "conexao.php";

    $usuario = $_POST["usuario"];
    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $senha = $_POST["senha"];
    $email = $_POST["email"]; 

    $sql = "INSERT INTO usuarios (usuario, nome, sobrenome, senha, email) VALUES ('$usuario', '$nome', '$sobrenome', '$senha', '$email')";

    $retorno["status"] = 201;
    $retorno["message"] = "Produto adicionado no carrinho";
    $objetoJSON = json_encode($retorno);

    if ($conn->query($sql) === TRUE) {
        echo $objetoJSON;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();

?>