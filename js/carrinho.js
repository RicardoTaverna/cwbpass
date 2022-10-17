function getCarrinho(){
    let data = new FormData()

    const TOKEN_KEY = "@cwbpass-Token"
    token = localStorage.getItem(TOKEN_KEY);
    data.append("token", token)

    fetch("../../php/getCarrinho.php", {
        method: "GET"
    }).then(async (response) => {
        data = await response.json()

        let total = 5.50 * data.id.quantidade

        let conteudo = '<div class="shopping-cart">'
        conteudo += '<div class="shopping-cart-content">'
        conteudo += '<img src="../../images/pay.jpg" alt="" srcset="" width="50">'
        conteudo += '<p style="margin: 2rem;">Passagem</p>'
        conteudo += `<p style="margin: 2rem;"> ${data.id.quantidade}</p>`
        conteudo += `<p style="margin: 1rem;">5.50</p>`
        conteudo += '</div>'
        conteudo += '<button style="margin-top: 2rem;" class="btn-danger">deletar</button>'
        conteudo += `<span style="margin-left:8rem;">Total: R$${total}</span>`
        conteudo += '</div>'
        
        let div = document.getElementById("carrinho")
        div.innerHTML += conteudo
            
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

    let divPix = document.getElementById("pix")

    if (divPix.style.display === "block") {
        divPix.style.display = "none";
    }
}

function pix(){
    let ccredito = document.getElementById("cartaoCredito")
    
    if (ccredito.style.display === "block") {
        ccredito.style.display = "none";
    }


    let divPix = document.getElementById("pix")

    if (divPix.style.display === "none") {
        divPix.style.display = "block";
    } else {
    divPix.style.display = "none";
    }
}