async function login(){
    let form = document.getElementById('login')
    let data = new FormData(form)

    const token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)

    data.append("token", token)

    await fetch("../php/login.php", {
        method: "POST",
        body: data
    }).then(() => {
        console.log(token)
    })
}