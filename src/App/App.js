import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PrivateRoute } from '../_components';
import { history } from '../_helpers';
import { FeedbackPage } from '../FeedbackPage';
import { Timeline } from '../Timeline'; 
import { SignIn } from '../SignIn';
import { fetchPosts } from '../_actions';
import { userActions } from '../_actions';
import { Router, Route} from 'react-router-dom';

const  mapStateToProps = (state) =>{
	const  { loggedIn } = state.authentication;
	const  { isPending, posts, err } = state.getPosts;
	return{
		loggedIn,
		isPending,
		posts,
		err,
	}
}
const mapDispatchToProps = (dispatch)=>{
	return{
		logout: ()=>dispatch(userActions.logout()),
		fetchPosts: (token) => dispatch(fetchPosts(token)),

	}
}


class App extends Component {

	render() {
	    return (
            <Router history={history}>
                <div className='app'>
                    <PrivateRoute exact path="/" component={Timeline} />
                    <Route path="/login" component={SignIn} />
                    <Route path="/feedback" component={FeedbackPage} />
                </div>
            </Router>
	    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);