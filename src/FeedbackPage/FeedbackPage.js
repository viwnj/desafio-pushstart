import React from 'react';
import { connect } from 'react-redux';
import { feedbackActions } from '../_actions';
import { isMobile, emailValidator } from '../_helpers';
import { Link } from 'react-router-dom'
import './feedbackpage.css';

class FeedbackPage extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            message:'',
            charactersLeft:10,
            submittedWithErrors:'',
            submitted:false,
        }
    }
    handleChange = (e) =>{
        const { name, value} = e.target;
        this.setState({[name]:value})
    }
    handleMessage = (e) =>{
        const { value } = e.target;
        this.setState({
            message:value,
        })
    }
    sendFeedback =(e) => {
        const { name, email, message } = this.state;
        e.preventDefault();
        if(name && emailValidator(email) && message.length >= 10){
            this.setState({
                submittedWithErrors:false,
                submitted:true,
                name:'',
                email:'',
                message:'',
            })
            this.props.dispatch(feedbackActions.sendFeedback(name,email,message))
        }
        else{
            this.setState({submittedWithErrors:true})
        }
    }
    componentDidUpdate(prevProps, prevState){   
        let  charactersLeft = 10;
        const length = this.state.message.length;
        if(prevState.message.length !== length)
        {   
             length >= 10 ? charactersLeft = 0 : charactersLeft = 10 - length;
             this.setState({charactersLeft:charactersLeft})
        }
    }
    render(){
        const {submittedWithErrors, submitted, name, email, message } = this.state;
        const {pending, error} = this.props;
        return(
            <div className='feedback-page bg-light'>
                <nav className="sticky-top navbar navbar-dark bg-dark d-flex justify-content-center">
                    <a className="navbar-brand" href>
                         <a className="navbar-brand text-white" href >Feedback</a>
                    </a>
                </nav>                
                {
                    !submitted &&
                    <div className="alert alert-warning" role="alert">
                      Deixe suas <strong>críticas</strong> e <strong>sugestões</strong>! Assim podemos
                      melhorar o nosso conteúdo
                    </div>
                }
                {
                    submitted && 
                    <div className={`alert alert-${error ? 'danger':'success'} alert-dismissible fade show`} role="alert">
                      {`${error ? 'Ocorreu um erro ao enviar seu feedback :(. Tente novamente mais tarde':'Seu feedback foi enviado com sucesso! Agradecemos sua participação'}`}
                    </div>                    
                }


                <div className='feedback-page-body container'>
                    {!isMobile() && <h1 className='display-4'>Nos dê seu feedback!</h1>}
                    <div className='row'>
                        <div className='col-md-6 mt-3'>
                            <div className='form-group my-3'>
                                 <input 
                                    type="text" 
                                    name="name" 
                                    className ="form-control py-3" 
                                    placeholder="Seu Nome *"
                                    onChange={this.handleChange} 
                                    value={this.state.name}
                                    required
                                    autofocus
                                    />
                                {
                                    submittedWithErrors && !name && 
                                    <div className='help-block text-danger'>Um nome é necessário</div>
                                }
                            </div>
                            <div className='form-group'>
                                <input type="email" name="email" className ="form-control" placeholder="Seu Email *" onChange={this.handleChange} value={this.state.email}/>
                                {   submittedWithErrors && !emailValidator(email) && 
                                        <div className='help-block text-danger'>*Um email valido é necessário</div>
                                }   
                            </div>
                            {
                                !isMobile() &&                             
                                <div className ="form-group">
                                    <button className='button btn btn-custom btn-lg btn-block' type="submit" name="btnSubmit" onClick={this.sendFeedback} >Enviar Mensagem</button>
                                      { pending &&
                                            <img alt='carregando' src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                      }
                                      <Link to='/' className='text-center text-muted'>Voltar a página inicial</Link>
                                
                                </div>
                            }                       
                         </div>
                        <div className='col-md-6 mt-4 pt-2'>
                            <textarea type='text' name="message" className ="form-control" placeholder="Sua mensagem *" style={{width:'100%', minHeight:'40vh', maxHeight:'50vh'}} onChange={this.handleMessage} value={this.state.message}></textarea>
                            <div className='text-muted font-weight-light ml-2'>Escreva pelo menos {this.state.charactersLeft} caracteres</div>
                            {  submittedWithErrors && message.length < 10 && 
                                <div className='help-block text-danger'>*Uma mensagem de pelo menos 10 caracteres é necessária</div>
                            }
                            {
                                isMobile() &&                             
                                <div className ="form-group">
                                    <button className='btn btn-custom btn-lg btn-block' type="submit" name="btnSubmit" onClick={this.sendFeedback} >Enviar Mensagem</button>
                                      { pending &&
                                            <img alt='carregando' src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                      }
                                 <Link to='/' className='text-center text-muted'>Voltar a página inicial</Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { pending, error } = state.feedbackReducer;
    return{
        pending,
        error,
    }
}
const connectedFeedbackPage = connect(mapStateToProps)(FeedbackPage);

export { connectedFeedbackPage as FeedbackPage};