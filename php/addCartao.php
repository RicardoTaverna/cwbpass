<?php

    include "conexao.php";
    
    $nome = $_POST["nome"];
    $numero = $_POST["numero"];
    $data_expiracao = $_POST["data_expiracao"];
    $ccv = $_POST["ccv"];

    $insert = "INSERT INTO cartao_credito (usuario, nome, numero_cartao, data_validade, ccv) VALUES (9, '$nome', '$numero', '$data_expiracao', $ccv)";

    $retorno["status"] = 201;
    $retorno["message"] = "Cartão adicionado a conta";
    $objetoJSON = json_encode($retorno);

    if ($conn->query($insert) === TRUE) {
        echo $objetoJSON;
    } else {
        echo "Error: " . $sql . $conn->error;
    }

    $conn->close();

?>