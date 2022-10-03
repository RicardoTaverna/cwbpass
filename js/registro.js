async function registro(){
    let form = document.getElementById('registro')
    let data = new FormData(form)

    let usuario = document.getElementById('usuario').value
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let confirmaSenha =  document.getElementById('confirma-senha').value

    let divSenhas = document.getElementById('senhas')
    divSenhas.innerHTML = ''

    if(
        usuario != "" &&
        nome != "" &&
        sobrenome != "" &&
        email != "" &&
        senha != "" &&
        confirmaSenha != ""
    ) {
        if(senha != confirmaSenha){
            divSenhas.innerHTML = '<p>Senhas nãs são iguais!</p>'
        } else {
            await fetch("../php/registro.php", {
                method: "POST",
                body: data
            }).then( () => {
                window.location.href = "http://127.0.0.1/cwbpass/login/";
            }).catch(function(err) {
                console.info(err + " url: " + url);
            });
        }
    } else {
        if(usuario == ''){
            document.getElementById('usuario').toggleAttribute('required')
        }
        if(nome == ''){
            document.getElementById('nome').toggleAttribute('required')
        }
        if(sobrenome == ''){
            document.getElementById('sobrenome').toggleAttribute('required')
        }
        if(email == ''){
            document.getElementById('email').toggleAttribute('required')
        }
        if(senha == ''){
            document.getElementById('senha').toggleAttribute('required')
        }
        if(confirmaSenha == ''){
            document.getElementById('confirma-senha').toggleAttribute('required')
        }
    }

   
}


    