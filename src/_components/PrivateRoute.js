import {Route, Redirect} from 'react-router-dom';
import React from 'react';

/*   Componente privado que tem como funcção renderizar a Timeline se o usuário estiver logado
	 e redirecioná-lo à pagina de login caso não estiver.

	 para saber se o usuário está logado, verificamos se há um objeto chamdo 'user'
	 no localStorage. Esse sistema pode ser bypassado adicionando esse objeto manualmente
	 mas mesmo que isso seja feito, o bypasser não verá nada além do menu lateral pois 
	 os posts são protegidos com um token.
*/
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (

        localStorage.getItem('user')  
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)