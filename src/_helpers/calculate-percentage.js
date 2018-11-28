// função que calcula a porcentagem de votos em uma enquete
// Usado em  ../Timeline/TimelineComponents/Pool.js

export function percentage(total,val){
 	const percentage = (val * 100)/total;
	return percentage;
}