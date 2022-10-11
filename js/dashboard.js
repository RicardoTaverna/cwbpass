async function addTicket(){
    let form = document.getElementById('tickets')
    let data = new FormData(form)

    const TOKEN_KEY = "@cwbpass-Token"
    token = localStorage.getItem(TOKEN_KEY);

    data.append("token", token)

    await fetch("../php/addCarrinho.php", {
        method: "POST",
        body: data
    }).then(() => {
        window.location.href = "http://127.0.0.1/cwbpass/dashboard/carrinho/";
    })
    
}