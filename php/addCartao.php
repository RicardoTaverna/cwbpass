<?php

    include "conexao.php";

    include "conexao.php";
    
    $token = $_POST["token"];
    $nome = $_POST["nome"];
    $numero = $_POST["numero"];
    $data_expiracao = $_POST["data_expiracao"];
    $ccv = $_POST["ccv"];

    $query = "SELECT usuario FROM sessao WHERE token = '$token'";

    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $usuario = $row["usuario"];
        }
    }

    $insert = "INSERT INTO cartao_credito (usuario, nome, numero_cartao, data_validade, ccv) VALUES ($usuario, '$nome', '$numero', '$data_expiracao', $ccv)";

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