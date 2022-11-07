<?php

    include "conexao.php";
    
    $quantidade = $_POST["quantidade"];

    $insert = "INSERT INTO carrinho (produto, usuario, quantidade, status) VALUES (1, 9, $quantidade, 1)";

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