/*
	Cria um novo browser history (se existente). 
	Decidi usar o history já existente nos browsers ao invés do providênciado pelo react-router
	porque assim podemos fazer a mudança de rotas através de um dispatch de uma action.
*/

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();