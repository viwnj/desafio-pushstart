import React from 'react';
import './stickyfooter.css';
import { Link } from 'react-router-dom';

//Apenas visível em mobile
export function StickyFooter(props){
	return(
		<footer className='footer navbar navbar-dark bg-custom'>
			<div className='container'>
				<div class="w-100 d-flex justify-content-around ">
				  <Link to='/feedback'>
				  	<i class="far fa-comment-alt font-weight-light text-white"></i>
				  </Link>
				  <span class="list-inline-item">
				  	<i class="fas fa-user-plus mr-2 text-white"></i>
				  </span>
				  <span class='list-inline-item' onClick={props.logout}>
				  	<i  class="fas fa-sign-out-alt mr-2 text-white"></i>
				  </span>
				</div>
			</div>		
		</footer>
	);

}