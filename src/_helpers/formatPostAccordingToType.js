import React from 'react';
import { checkImage } from '.'
import { Pool, Image, SimpleBanner, Video } from '../Timeline/TimelineComponents';
function formatPostAccordingToType(post){
	switch(post.type){
		case 'image':
			return <Image post={post}/>;
		/*posts do tipo banner podem ser tanto enquetes, como textos puros.*/
		case 'banner':
			// se o post for um banner e tiver a propriedade 'data.options', ele é uma enquete.
			// devemos tratar enquetes diferentemente, é isto que fazemos no componente retornado abaixo.
			if(post.data.options){
				return <Pool post={post}/>;
			}
			// caso o post não seja uma enquete, (i.e.: não tem a propriedade 'options') apenas renderizar o texto
			// com um plano de fundo legal.
			else{
				return <SimpleBanner post={post} />;
			}

		case 'video':
			// videos podem ter a propriedade cover dentro de seu objeto 'data' (i.e.: às vezes, data.cover === true)
			// neste caso, deve-se renderizar o video com o markup abaixo
			return <Video post={post} checkImage={checkImage}/>
		default:
			return null;

	}
}
export {formatPostAccordingToType};