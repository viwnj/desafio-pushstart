/*
	Substitua todos os espaços por dashes ` - `
	Usado em '../Timeline/TimelineComponents/Video.js'
*/
export function spinalTap(str){
	const pattern = /\s/g;
	const newStr = str.replace(pattern,'-');
	return newStr.toLowerCase();
}