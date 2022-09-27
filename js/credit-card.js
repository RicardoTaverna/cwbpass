function credidCard(){
    let nome = document.getElementById("nome").value;
    let nomeCartao = document.getElementById("card-nome");
    nomeCartao.innerHTML = nome;

    let number = document.getElementById("number").value;
    let cardNumber = document.getElementById("cardNumber")
    cardNumber.innerHTML = number
}

function sendCreditCart(){
    let form = document.getElementById("cartaocredito")
    let data = new FormData(form)

    fetch("../php/cartao.php", {
        method: "POST",
        body: data
    })
}