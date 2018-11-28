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
	//Keep adding one more day to the count while goal_month > t_month;
	do{
		t_day++;
		remaining_days++;
		//if t_day reaches its month last day, that means a month has passed. so reset t_day back to 1 on the 
		//next iteration.
		if(t_day > lastDayOfMonth[t_month]){
			t_day = 1;
			t_month++;
		}
	}while(goal_month > t_month || t_day < goal_day);

	return remaining_days;
}
