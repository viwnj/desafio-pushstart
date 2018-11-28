async function getPosts(authToken){
	const requestOptions = {
		method:'GET',
		headers:{'X-Authorization':authToken}
	}
	try{
		const response = await fetch('https://teste.pushstart.com.br/api/timeline', requestOptions);
		const posts = await response.json();
		return posts;	
	}catch(err){
		return err;
	}
}

export const postServices = {
	getPosts,
}