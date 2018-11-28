
async function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    const response = await fetch('https://teste.pushstart.com.br/api/login', requestOptions)
    const user = await response.json();
    if(user.token){
         //adicionar o usuário recebido ao localStorage para mantê-lo logado.
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }
    else{
        const error = {...user}
        throw (error.message)
    }


}

function logout(){
    localStorage.removeItem('user'); //remover o usuário do localStorage para deslogar
}

export const userService = {
    login,
    logout,
}