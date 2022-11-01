<?php 

    include "conexao.php";

    $query = "SELECT * FROM cartao_credito WHERE usuario = 9";

    $result = $conn->query($query);

    $retorno["nome"];
    $retorno["numero_cartao"];
    $retorno["data_validade"];
    $retorno["ccv"];

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $retorno["nome"] = $row["nome"];
            $retorno["numero_cartao"] = $row["numero_cartao"];
            $retorno["data_validade"] = $row["data_validade"];
            $retorno["ccv"] = $row["ccv"];
        }
    }

    $objetoJSON = json_encode($retorno);
    echo $objetoJSON;
    
    ?>