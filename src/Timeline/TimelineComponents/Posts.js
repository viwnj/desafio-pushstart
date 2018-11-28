import React from 'react';
import { postedAt, formatPostAccordingToType } from '../../_helpers';
import './css/posts.css';
export function Posts(props){
	return(
		props.posts.map((post,index) =>{

			return(
				<div key={post.likes} className="jumbotron py-3 px-0 bg-white border mb-3">
					<div className="media ml-2">
					  <img className="mr-3 rounded-circle " src={post.author.avatar} width='50' height='50' alt="author avatar"/>
					  <div className="media-body">
					    <div className="mt-0">
					    	<p className='font-weight-bold mb-0'>{post.author.name}</p>
					    	<p className='mt-0 text-muted' style={{fontSize:'12px'}}>{postedAt(post.createdAt)}</p>
					    </div>
					  </div>
					</div>
					<div className='post-content'>
					{	
						formatPostAccordingToType(post)
					}
					</div>
					<div className='mb-0'>
						<i className="far fa-heart mt-3 mb-1 ml-3 font-weight-light" style={{color:'purple', fontSize:'24px'}}></i>
						<span className='ml-1 font-weight-bold' style={{color:'purple',	 fontWeight:'bold'}}>{post.likes}</span>
					</div>
				</div>
			)
		})
	);
}

