<?php

    include "conexao.php";
    
    $token = $_POST["token"];
    $quantidade = $_POST["quantidade"];

    $query = "SELECT usuario FROM sessao WHERE token = '$token'";

    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $usuario = $row["usuario"];
        }
    }

    $insert = "INSERT INTO carrinho (produto, usuario, quantidade, status) VALUES (1, $usuario, $quantidade, 1)";

    $retorno["status"] = 201;
    $retorno["message"] = "Produto adicionado no carrinho";
    $objetoJSON = json_encode($retorno);

    if ($conn->query($insert) === TRUE) {
        echo $objetoJSON;
    } else {
        echo "Error: " . $sql . $conn->error;
    }

    $conn->close();

?>