export function emailValidator(email){
	//eslint-disable-next-line
	const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	return pattern.test(email);
}