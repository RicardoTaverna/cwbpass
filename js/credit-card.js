function credidCard(){
    let nome = document.getElementById("nome").value;
    let nomeCartao = document.getElementById("card-nome");
    nomeCartao.innerHTML = nome;

    let number = document.getElementById("number").value;
    let cardNumber = document.getElementById("cardNumber")
    cardNumber.innerHTML = number
}

function addCreditCart(){
    let form = document.getElementById("cartaocredito")
    let data = new FormData(form)

    const TOKEN_KEY = "@cwbpass-Token"
    token = localStorage.getItem(TOKEN_KEY);
    data.append("token", token)

    fetch("../../php/addCartao.php", {
        method: "POST",
        body: data
    }).then(async (response) => {
        let data = await response.json()
        let message = data.message

        let snack = document.getElementById("snackbar");
        snack.innerHTML = message
        snack.className = "show";
        setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);

    })
}