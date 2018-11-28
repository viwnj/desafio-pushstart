
async function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    try{
        const response = await fetch('https://teste.pushstart.com.br/api/login', requestOptions)
        const user = await response.json();
        if(user.token){
            localStorage.setItem('user', JSON.stringify(user));
        }
        return user;

    }
    catch(err){
        return err;
    }
}

function logout(){
    localStorage.removeItem('user');
}

export const userService = {
    login,
    logout,
}