/*
	Função conveniente que checa se uma imagem existe.
	retorna false se a imagem for inválida e true se for válida.
*/
export function checkImage(imageSrc) {
    var img = new Image();
    img.onload = ()=> true; 
    img.onerror = () => false;
    img.src = imageSrc;
}