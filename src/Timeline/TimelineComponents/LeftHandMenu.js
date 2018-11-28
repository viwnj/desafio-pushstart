import React from 'react';
import './css/lefthandmenu.css';
import { Link } from 'react-router-dom';

export function LeftHandMenu(props){
	return(
		<ul className=" list-group text-dark">
		  <li className="list-group-item bg-custom text-white px-3 py-3">Home</li>
		  <li className="list-group-item">
		  	<Link to='/feedback/' className='link'>
		  		<i className="far fa-comment-alt mr-2 font-weight-light text-dark"></i>
		  		<span className='text-dark' >Nos dê Feedback</span>
		  	</Link>
		  </li>
		  <li className="list-group-item">
		  	<i className="far fa-user mr-2"></i>
		  		<a className='text-dark link'
		  		 target='_blank'
		  		 rel='noopener noreferrer'
		  		 href='https://twitter.com/intent/tweet?text=Estou usando a melhor rede social já lançada!&hashtags=pushstart'>
		  		Compartilhe no Twitter!
		  		</a>
		  </li>
		  <li className='list-group-item' style={{cursor:'pointer'}}onClick={props.logout}>
		  	<i className="fas fa-sign-out-alt mr-2"></i>
		  	Sair
		  </li>
		</ul>
	)
}
