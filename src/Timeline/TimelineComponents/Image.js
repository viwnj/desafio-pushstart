import React from 'react';

export function Image({post}){
	return(
		<div className='image'>
			<p className='ml-2 '>{post.data.text}</p>
			<img src={post.data.image} className='w-100 img-fluid' height='auto' alt='post'/>
		</div>
	);
}