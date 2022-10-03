<?php

    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "cwbpass";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $senha = $_POST["senha"];
    $email = $_POST["email"]; 
    $token = $_POST["token"];

    $query = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha';";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $usuario = $row["id"];
            $insert = "INSERT INTO sessao (token, usuario) VALUES ('$token', '$usuario')";
            if ($conn->query($insert) === TRUE) {
                echo "Sesso adicionada";
            } else {
                echo "Error: " . $sql . $conn->error;
            }
        }
       
    } else {
        echo "0 results";
    }
    
    $conn->close();

    

?>