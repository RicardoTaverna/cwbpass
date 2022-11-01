<?php

    include "conexao.php";

    $quantidade = $_POST["quantidade"];
    $id_carrinho = $_POST["id_carrinho"];


    $query = "SELECT * FROM tickets WHERE usuario = 9";
    $result = $conn->query($query);
    $retorno["quantidade"];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $retorno["quantidade"] = $row["quantidade"];
        }
    }
    
    $quantidade += $retorno["quantidade"];
    
    $insert = "UPDATE tickets SET quantidade = $quantidade WHERE usuario = 9";


    $retorno["status"] = 201;
    $retorno["message"] = "Tickets adicionados a conta";
    $objetoJSON = json_encode($retorno);

    if ($conn->query($insert) === TRUE) {
        echo $objetoJSON;
    } else {
        echo "Error: " . $sql . $conn->error;
    }

    $delete = "DELETE FROM carrinho WHERE id = $id_carrinho";

    if ($conn->query($delete) === TRUE) {
        echo "carrinho excluido";
    } else {
        echo "Error: " . $sql . $conn->error;
    }

    $conn->close();

?>