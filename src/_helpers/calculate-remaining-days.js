
/*
	função que calcula o numero de dias restantes até uma enqute acabar 
	usado em ../Timeline/TimelineComponents/Pool.js
*/
import { parseUnixTime } from './parseUnixTime';
export function remaining_days(goal_date){
	const lastDayOfMonth = [31,28,31,30,31,30, 31, 31, 30, 31,30,31]; 
	const today = new Date(Date.now()); 
	let t_day   = today.getDate();
	let t_month = today.getMonth();
		
	let closesAt   = parseUnixTime(goal_date);
	let goal_day   = closesAt.getDate();
	let goal_month = closesAt.getMonth();

	let remaining_days  = 0;
	//adicione mais um dia à contagem equanto goal_month > t_month;
	do{
		t_day++;
		remaining_days++; //acrescenta cada vez que t_month acrescenta para definir o restante de dias
		
		//se t_day alcançar o ultimo dia do mes, significa que um mês se passou. então resete a contaegem t_day  
		//e adicione 1 à contagem de t_month.
		if(t_day > lastDayOfMonth[t_month]){
			t_day = 1;
			t_month++;
		}
	}while(goal_month > t_month || t_day < goal_day);

	return remaining_days;
}
