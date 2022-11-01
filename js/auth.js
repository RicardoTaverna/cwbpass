function isAuth(){
    const TOKEN_KEY = "@cwbpass-Token"
    token = localStorage.getItem(TOKEN_KEY);
    if(token){
        console.log('autenticado')
    }

    fetch("../php/getTicket.php", {
        method: "GET",
    }).then(async (response) => {

        data = await response.json()

        let quantidade  = document.getElementById("ticket")
        quantidade.innerHTML = data.quantidade
    })
}