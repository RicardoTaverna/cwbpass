async function login(){
    let form = document.getElementById('login')
    let data = new FormData(form)

    const TOKEN_KEY = "@cwbpass-Token"
    const token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)

    data.append("token", token)

    await fetch("../php/login.php", {
        method: "POST",
        body: data
    }).then(() => {
        localStorage.setItem(TOKEN_KEY, token);
        console.log('token add ao storage')
    })
}

function isAuth(){
    const TOKEN_KEY = "@cwbpass-Token"
    token = localStorage.getItem(TOKEN_KEY);
    if(token){
        window.location.href = "http://127.0.0.1/cwbpass/dashboard/";
    }
}