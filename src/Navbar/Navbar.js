import React from 'react';

export function Navbar(props){
	return(
		<nav style={{height:'50px'}}className="sticky-top navbar navbar-dark bg-custom d-flex justify-content-center">
			<div className="navbar-brand" >
 				 <span className="navbar-brand text-white" >Timeline</span>
			</div>
		</nav>
	);
}
