import { parseUnixTime } from './parseUnixTime';
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

	if(post_year < t_year){
		const years_ago = t_year - post_year;
		return `há ${years_ago} anos`;
	}

	else if( post_month < t_month || post_date < t_date ){
		let i = 0;
		let j = 0;
		do{
			post_date++;
			i++;
			if(post_date > lastDayOfMonth[post_month]){
				post_month++;
				j++;
			}
		}while(post_month < t_month || post_date  < t_date);
		return j > 0 ? `há ${j} meses` : `há ${i} dias`;
	}
	
	else if( post_month === t_month	&& post_date === t_date && post_hour < t_hour){
		const hours_ago = t_hour - post_hour;
		return `há ${hours_ago} horas`;
	}
	else if( post_month === t_month	&& post_date === t_date && post_hour === t_hour && post_minutes < t_minutes){
		const minutes_ago  = t_minutes - post_minutes;
		return `${minutes_ago} min`;
	}
	else{
		return 'Agora mesmo';
	}
}