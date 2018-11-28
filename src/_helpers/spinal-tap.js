export function spinalTap(str){
	const pattern = /\s/g;
	const newStr = str.replace(pattern,'-');
	return newStr.toLowerCase();
}