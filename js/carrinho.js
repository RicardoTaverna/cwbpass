let quantidade = 0;
let total = 0;
let id_carrinho = 0;

function getCarrinho(){
    let data = new FormData()

    const TOKEN_KEY = "@cwbpass-Token"
    token = localStorage.getItem(TOKEN_KEY);
    data.append("token", token)

    fetch("../../php/getCarrinho.php", {
        method: "GET"
    }).then(async (response) => {
        data = await response.json()
        

        for (let i=0; i<data.length; i++){
            
            quantidade += 1 * data[i].quantidade
            let quantidade_total = data[i].quantidade
            console.log(quantidade)
            
            total += 5.50 * quantidade_total
            id_carrinho = data[i].id

            let total_carrinho = 5.50 * data[i].quantidade

            let conteudo = '<div class="shopping-cart">'
            conteudo += '<div class="shopping-cart-content">'
            conteudo += '<img src="../../images/pay.jpg" alt="" srcset="" width="50">'
            conteudo += '<p style="margin: 2rem;">Passagem</p>'
            conteudo += `<p style="margin: 2rem;"> ${data[i].quantidade}</p>`
            conteudo += `<p style="margin: 1rem;">5.50</p>`
            conteudo += '</div>'
            conteudo += '<button style="margin-top: 2rem;" class="btn-danger">deletar</button>'
            conteudo += `<span style="margin-left:7.5rem;">Total: R$${total_carrinho}</span>`
            conteudo += '</div>'
            
            
            let div = document.getElementById("carrinho")
            div.innerHTML += conteudo
        }

            
        let valorTotal = document.getElementById("valorTotal")
        valorTotal.innerHTML += total

        let quantidadeTotal = document.getElementById("quantidadeTotal")
        quantidadeTotal.innerHTML += quantidade

    })

}

function openModal(){
    let modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    modal.style.display = "block";  
    
    // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
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

function getCartao(){
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
    })
}

function finalizarCompra() {
    data = new FormData()
    data.append("quantidade", quantidade)
    data.append("id_carrinho", id_carrinho)

    fetch("../../php/addTicket.php", {
        method: "POST",
        body: data
    }).then(() => {
        window.location.href = "http://127.0.0.1/cwbpass/dashboard/";
    })
}