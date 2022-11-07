<?php

    include "conexao.php";

    $query = "SELECT * FROM carrinho WHERE usuario = 9";

    $result = $conn->query($query);

    if ($result->num_rows > 0) {

        $retorno["id"];
        $retorno["quantidade"];
        $retorno["carrinho_id"];
        $retorno["linha"];
        $i = 0;
        while($row = $result->fetch_assoc()) {
            $retorno[$i]["id"] = $row["id"];
            $retorno[$i]["quantidade"] = $row["quantidade"];
            $retorno[$i]["carrinho_id"] = $row["id"];
            $retorno[$i]["linha"] = key($result);
            $i++;
        }
    }
    $objetoJSON = json_encode($retorno);
    echo $objetoJSON;

?>