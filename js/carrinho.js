function getCarrinho(){
    let data = new FormData()

    const TOKEN_KEY = "@cwbpass-Token"
    token = localStorage.getItem(TOKEN_KEY);
    data.append("token", token)

    fetch("../../php/getCarrinho.php", {
        method: "GET"
    })
}

function finalizarCompra(){
    console.log("compra finalizada")
}

function cartaoCredito(){
    let ccredito = document.getElementById("cartaoCredito")

    if (ccredito.style.display === "none") {
        ccredito.style.display = "block";
    } else {
    ccredito.style.display = "none";
    }
}