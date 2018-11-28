import React from 'react';
import { checkImage } from '.'
import { Pool, Image, SimpleBanner, Video } from '../Timeline/TimelineComponents';

/*
	 Posts podem ser de diversos tipos: Imagens, vídeos, banners...
	 Para que esses posts possam ser renderizados e estilizados de forma correta precisamos
	 retornar componentes com markups diferentes para cada tipo de post
	 formatPostAccordingToType recebe o {objeto} post como argumento e retorna um componente diferente
	 Baseado no tipo do post. Essa função é extremamente eficiente conforme mais tipos de post são 
	 criados.

*/
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
			return <Video post={post} checkImage={checkImage}/>
		default:
			return null;

	}
}
export {formatPostAccordingToType};