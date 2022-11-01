function credidCard(){
    fetch("../../php/getCartao.php", {
        method: "GET",
    }).then(async (response) => {

        data = await response.json()

        let nome  = document.getElementById("nome")
        nome.value = data.nome
        let number = document.getElementById("number")
        number.value = data.numero_cartao
        let date = document.getElementById("date")
        date.value = data.data_validade
        let ccv = document.getElementById("ccv")
        ccv.value = data.ccv

        let nomeCartao = document.getElementById("card-nome")
        nomeCartao.innerHTML = data.nome

        let cardNumber = document.getElementById("cardNumber")
        cardNumber.innerHTML = data.numero_cartao
    })
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