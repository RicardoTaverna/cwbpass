<?php

    include "conexao.php";

    $query = "SELECT * FROM tickets WHERE usuario = 9";
    $result = $conn->query($query);
    $retorno["quantidade"];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $retorno["quantidade"] = $row["quantidade"];
        }
    }
    
    $quantidade = $retorno["quantidade"] - 1;


    $insert = "UPDATE tickets SET quantidade = $quantidade WHERE usuario = 9";


    $retorno["message"] = "Ticket Utilizado";
    $retorno["quantidade"] = $quantidade;
    $objetoJSON = json_encode($retorno);

    if ($conn->query($insert) === TRUE) {
        echo $objetoJSON;
    } else {
        echo "Error: " . $sql . $conn->error;
    }


?>