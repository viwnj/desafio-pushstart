
export function checkImage(imageSrc) {
    var img = new Image();
    img.onload = ()=> true; 
    img.onerror = () => false;
    img.src = imageSrc;
}