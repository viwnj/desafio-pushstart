import React from 'react';

export function SimpleBanner({post}){
	return(
		<div className='bg-primary text-white font-weight-bold'>
			<article className='ml-2 text-center' style={{fontSize:'3em'}}>{post.data.text}</article>

		</div>
	);	
}