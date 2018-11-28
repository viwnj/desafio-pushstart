import React from 'react';
import { spinalTap } from '../../_helpers';

export const Video = ({post,checkImage}) =>{
	return checkImage() ? (
		<div className='video'>
			<p className='ml-2'>{post.data.text}</p>
			<a href={post.data.video} target='_blank' rel='noopener noreferrer'>
				<img src={post.data.cover} className='img-fluid w-100' alt='cover'/>					
			</a>
		</div>
	):
	(
		<div className='video'>
			<p className='ml-2'>{post.data.text}</p>
				<iframe
				title={spinalTap(post.data.text)}
				style={{width:'100%',height:'300px'}}
				src={
					//eslint-disable-next-line
					post.data.video.replace(/.com\/watch\?v\=/, '.com/embed/')
				}
				>
				</iframe>

		</div>
	);
}