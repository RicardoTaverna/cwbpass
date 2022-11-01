function useTicket() {
    let data = new FormData()
    const TOKEN_KEY = "@cwbpass-Token"
    token = localStorage.getItem(TOKEN_KEY);
    data.append("token", token)

    fetch("../../php/updateTicket.php", {
        method: "POST",
        body: data
    }).then(async (response) => {
        let data = await response.json()
        let message = data.message

        let snack = document.getElementById("snackbar");
        snack.innerHTML = message
        snack.className = "show";
        setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);

    })
}