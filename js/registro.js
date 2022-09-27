async function registro(){
    let form = document.getElementById('registro')
    let data = new FormData(form)

    await fetch("../php/registro.php", {
        method: "POST",
        body: data
    }).then( () => {
        window.location.href = "http://127.0.0.1/cwbpass/login/";
    }).catch(function(err) {
        console.info(err + " url: " + url);
    });
}


    