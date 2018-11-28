import React, { Component } from 'react';
import { fetchPosts, userActions } from '../_actions';
import { connect } from 'react-redux';
import { Navbar } from '../Navbar';
import {isMobile } from '../_helpers'
import { Posts, LeftHandMenu }  from './TimelineComponents';
import {StickyFooter} from '../StickyFooter';


class Timeline extends Component{

	componentDidMount(){
		let user = JSON.parse(localStorage.getItem('user'));
		if(user){
			this.props.dispatch(fetchPosts(user.token));
		}
	}

	render(){
		return(
			<div>
				<Navbar />
				<main role='main' id='main' className='container mt-4'>
					<div className='row' id='left-hand-menu'>
						<div className='col-md-3'>
							{!isMobile() && <LeftHandMenu logout={()=>this.props.dispatch(userActions.logout())}/>}
						</div>
						<div className={'col-md-' + (isMobile() ? '12' : '6')}>
							<Posts posts={this.props.posts}/>
						</div>

					</div>
				</main>
				{isMobile() && <StickyFooter logout={()=>this.props.dispatch(userActions.logout())}/>}
			</div>
		)
	}
}

function mapStateToProps(state){
	const { posts } = state.getPosts;
	return{
		posts,
	}
}
const connectedTimeline = connect(mapStateToProps)(Timeline);
export { connectedTimeline as Timeline };