function atualizar_cadastro(){
    let form = document.getElementById('form-atualizar')
    let data = new FormData(form)

    fetch("../php/cadastro.php", {
        method: "POST",
        body: data
    })
}

function reset_password(){
    let form = document.getElementById('form-troca-senha')
    let data = new FormData(form)
}