<?php

    include "conexao.php";

    $query = "SELECT * FROM usuarios WHERE id = 9";

    $result = $conn->query($query);

    $retorno["usuario"];
    $retorno["nome"];
    $retorno["sobrenome"];
    $retorno["email"];

    if ($result->num_rows > 0) {
        
        while($row = $result->fetch_assoc()) {
            $retorno["usuario"] = $row["usuario"];
            $retorno["nome"] = $row["nome"];
            $retorno["sobrenome"] = $row["sobrenome"];
            $retorno["email"] = $row["email"];
        }
    }
    $objetoJSON = json_encode($retorno);
    echo $objetoJSON;

?>