function isAuth(){
    const TOKEN_KEY = "@cwbpass-Token"
    token = localStorage.getItem(TOKEN_KEY);
    if(token){
        console.log('autenticado')
    }
}