import { parseUnixTime } from './parseUnixTime';

/*
	Algorítmo que retorna há quantos anos/meses/dias/horas/minutos algo foi postado.

*/
export function postedAt(date){
	const lastDayOfMonth = [31,28,31,30,31,30, 31, 31, 30, 31,30,31]; 
	const today   = new Date(Date.now());
	const t_date  = today.getDate();
	const t_month = today.getMonth();
	const t_year  = today.getFullYear();
	const t_hour  = today.getHours();
	const t_minutes = today.getMinutes();

	const postedAt   = parseUnixTime(date);
	let post_date    = postedAt.getDate();
	let post_month   = postedAt.getMonth();
	let post_year    = postedAt.getFullYear();
	let post_hour    = postedAt.getHours();
	let post_minutes = postedAt.getMinutes();

	/*Se o ano da postagem for menor que o ano que estamos...*/
	if(post_year < t_year){
		const years_ago = t_year - post_year;
		return `há ${years_ago} anos`;
	}

	/*Se o mes ou o dia da postagem forem menores que o dia e mes que estamos atualmente...*/
	else if( post_month < t_month || post_date < t_date ){
		let i = 0; //acrescenta em 1 sempre que o dia da postagem for menor que o dia atual.
		let j = 0; // acrescenta em 1 sempre que o mes da postagem for menor que o mes atual.
		do{
			post_date++;
			i++;
			if(post_date > lastDayOfMonth[post_month]){
				post_month++;
				j++;
			}
		}while(post_month < t_month || post_date  < t_date);
		// retorna os valores de i e j.
		return j > 0 ? `há ${j} meses` : `há ${i} dias`;
	}
	
	// Se a postagem foi feita N há N horas naquele dia e mês, calcule há quantas horas ela foi feita e retorne o valor

	else if( post_month === t_month	&& post_date === t_date && post_hour < t_hour){
		const hours_ago = t_hour - post_hour;
		return `há ${hours_ago} horas`;
	}
	// Se a postagem foi feita N há N minutos naquele dia e mês, calcule há quantos minutos ela foi feita e retorne o valor
	else if( post_month === t_month	&& post_date === t_date && post_hour === t_hour && post_minutes < t_minutes){
		const minutes_ago  = t_minutes - post_minutes;
		return `${minutes_ago} min`;
	}

	// Se nenhum dos casos acima for atendido, significa que a postagem acabou de ser feita, retorne "Agora mesmo".
	else{
		return 'Agora mesmo';
	}
}