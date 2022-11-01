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

    $objetoJSON = json_encode($retorno);
    echo $objetoJSON;
    
    ?>