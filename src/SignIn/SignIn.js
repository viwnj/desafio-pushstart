import React from 'react';
import { connect }  from 'react-redux';
import { userActions } from '../_actions';
import { Link } from 'react-router-dom';
import './signin.css'
class SignIn extends React.Component{

	constructor(props){
		super(props);
		this.state={
			username:'',
			password:'',
			submitted:false,
		}
	}
	/*Função que controla ambos inputs de login */
	handleLoginInputs = (event) =>{
		const { name, value } = event.target;
		this.setState({[name]:value})
	}

	/*Função que se encarrega de dispachar a ação de login no store, que por sua vez, faz a validação*/
	onSubmitSignIn = (event) =>{
		event.preventDefault(); // não de um refresh na página quando o botão submit for clicado
		this.setState({submitted:true});
		const {username, password} = this.state; // destruturar username e password usando ES6
		const { dispatch } = this.props; // destruturar a função dispatch (recebida através de props pelo connect)
		if(username && password){
			// se um username e um password forem providenciados, dispatche a ação de login e tente fazer o login
			dispatch(userActions.login(username, password)); // tente fazer o login com o username e password providenciados pelo usuario	
		}
	}
	render(){
		const { submitted, username,password } = this.state;
		const { loggingIn, error} = this.props;
		return(
			<div className='signin-page'>
				<div className='header text-center d-flex align-items-center justify-content-center'>
					<div className='border rounded-circle px-4 py-3 bg-white'>
						<i className="px-3 py-3 far fa-user fa-5x img-responsive" style={{color:'#743eab'}}></i>
					</div>
				</div>
				<div className='body d-flex flex-column justify-content-center'>
					{error && <div className='lead text-danger text-center'>Ocorreu um erro D: ! Verifique suas credênciais e tente novamente </div>}
				    <form className="form-signin">
				      
				      <h1 className="h3 mb-2 font-weight-normal">Conectar-se</h1>
				      <div className={'form-group'+ (submitted && !username ? ' was-validated': '')}>
					      <label htmlFor="inputUsername" className="sr-only">Nome de usuário</label>
					      <input 
					      	name='username' 
					      	type="text" 
					      	id="inputUsername" 
					      	className="form-control"
					      	placeholder="Nome de usuário"
					      	value={this.state.username}
					      	onChange={this.handleLoginInputs}
					      	required 
					      	autofocus />
					      	{ submitted && ! username && 
					      		<div className='help-block text-danger'>O nome de usuário é necessário</div>
					      	}
					  </div>
					  <div className={'form-group' + ( submitted && !password ? ' was-validated': '')}>
					      <label htmlFor="inputPassword" className="sr-only">Senha</label>
					      <input 
					      	name='password' 
					      	type="password" 
					      	id="inputPassword" 
					      	className="form-control" 
					      	placeholder="Senha"
					      	value={this.state.password}
					      	onChange={this.handleLoginInputs}
					      	required/>
					      	{submitted && !password && 
					      		<div className='help-block text-danger'>Uma senha é necessária</div>
					      	}
				      </div>
				      <div className="checkbox mb-3">
				      </div>
				      <button className={'btn btn-lg btn-custom btn-block ' + (loggingIn ? 'disabled':'' )} type="submit" onClick={this.onSubmitSignIn}>Entrar</button>
	                  {loggingIn &&
	                    	<img alt='logando' src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
	               	  }
	               	  <Link to='/feedback/'className='d-flex align-items-end'><p className='mt-2 lead'>Nos dê feedback!</p></Link>
				      <p className="mt-2 mb-3 text-muted">&copy; 2017-2018</p>
				    </form>
			    </div>
			    <footer>
			    </footer>
		    </div>
		);	
	}

}
function mapStateToProps(state) {
	const { loggingIn,error } = state.authentication;
	return{
		error,
		loggingIn
	}
}

const connectedSignIn = connect(mapStateToProps)(SignIn);

export { connectedSignIn as SignIn};