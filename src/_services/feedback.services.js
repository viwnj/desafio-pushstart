async function sendFeedback(name, email, message){
	const send = await fetch('https://teste.pushstart.com.br/api/feedback',{
		method:'POST',
		headers:{'Content-Type':'application/json'},
		body:JSON.stringify({
			'name':name,
			'email':email,
			'message':message,
		})
	})
	const response = await send;
	if(response.ok){
		return response;
	}
	else{
		throw new Error('Algo deu errado...')
	}

}

export const feedbackServices = {
	sendFeedback,
}