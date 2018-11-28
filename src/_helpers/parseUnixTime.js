/*
	Converte os timestamps(createdAt, closesAt, etc..) Unix para datas entendíveis para o ser humano.
	Usard em: ./posted-at.js e ./calculate-remaining-days.js

*/
export function parseUnixTime(ms){
	let date = new Date(ms*1000);
	return date;
}