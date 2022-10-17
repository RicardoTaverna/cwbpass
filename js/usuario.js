function atualizarCadastro(){
    let form = document.getElementById('form-atualizar')
    let data = new FormData(form)
}

function loadForm(){

    fetch("../../php/getUsuario.php", {
        method: "GET",
    }).then(async (response) => {

        data = await response.json()
        console.log(data)

        let conteudo = '<form id="form-atualizar">'
        conteudo += `<div class="form-group"><input id="user" class="input" type="text" placeholder="Usuário" name="usuario" value="${data.usuario}"></div>`
        conteudo += `<div class="form-group"><input type="text" placeholder="Nome" class="input" name="nome" value="${data.nome}"></div>`
        conteudo += `<div class="form-group"><input type="text" placeholder="Sobrenome" class="input" name="sobrenome" value="${data.sobrenome}"></div>`
        conteudo += `<div class="form-group"><input type="email" placeholder="E-mail" class="input" name="email" value="${data.email}"></div>`
        conteudo += '<div class="login-btn-container"><button type="button" class="btn-secondary" onclick="atualizarCadastro()">Atualizar</button></div>'
        conteudo += '</form>'

        let div = document.getElementById("form")
        div.innerHTML += conteudo
    })


    
    

    
}