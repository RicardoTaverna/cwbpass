<?php

    include "conexao.php";

    $query = "SELECT * FROM carrinho WHERE usuario = 9";

    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $data[0];
        $retorno["id"];
        $retorno["quantidade"];
        $retorno["carrinho_id"];
        $retorno["linha"];
        while($row = $result->fetch_assoc()) {
            $retorno["id"] = $row["id"];
            $retorno["quantidade"] = $row["quantidade"];
            $retorno["carrinho_id"] = $row["id"];
            $retorno["linha"] = key($result);
            $data[key($row)] = $retorno;
        }
    }
    $objetoJSON = json_encode($data);
    echo $objetoJSON;

?>