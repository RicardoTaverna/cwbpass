<?php

    // nome = $_POST["nome"]

    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "cwbpass";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $usuario = $_POST["usuario"];
    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $senha = $_POST["senha"];
    $email = $_POST["email"]; 

    $sql = "INSERT INTO usuarios (usuario, nome, sobrenome, senha, email) VALUES ('$usuario', '$nome', '$sobrenome', '$senha', '$email')";

    if ($conn->query($sql) === TRUE) {
        echo "Novo usuário adicionado";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();

?>