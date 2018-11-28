## Projeto Desafio PushStart

## Instruções de Uso:

### Executando o projeto remotamente:
1. Instalar o NodeJS e NPM através deste [link](https://nodejs.org/en/). 
2. Baixar ou clonar o código fonte deste repositório.
3. Instalar os pacotes necessários executando `npm install` através da linha de comando no diretório do projeto.
4. Iniciar a aplicação executando `npm start` através de linha de comando no diretório do projeto.Este comando irá iniciar a aplicação dentro do navegador.


## Principais Dependências
* **react/react-dom**: O projeto foi desenvolvido em Reactjs, portanto, ambas são as principais dependência do projeto.
* **react-redux/redux**: Usado principalmente para _state management_ e controle do fluxo de dados dentro da aplicação.
* **redux-thunk**: Necessário para termos _async actions_ sendo dispachadas no Redux Store.
* **redux-logger(devDependencies)**:Util para termos controle (através do console) das actions & states que estão sendo desencadeadas.
**react-dom-router**: Gerenciamento de rotas.

## Estrutura do Projeto
Todo o código fonte do projeto pode ser encontrado dentro da pasta `src` que, por sua vez, é composta por diversas sub-pastas App, Timeline, FeedbackPage, etc. Eu adicionei um **underscore** nas pastas que não incluem features para o aplicativo (e.g: _helpers, _actions, _services). Isso faz com que elas fiquem organizadas ao topo do projeto, proporcionando uma navegação amigável dentro dos diretórios.

Toda pasta contém um arquivo nomeado `index.js` que exporta todos os módulos de todos os arquivos daquela pasta. Isto é feito para facilitar o `import` dos arquivos conforme o App escala, pois `import someFunciton from '../someFolder/some-file.js'` é substituído por  `import { someFunction } from '../someFolder';`.

### Diretórios
* **_actions**: O diretório _actions contém todos os _action creators_.  Os _action creators_ foram organizados em diferentes arquivos de acordo com o seu _type_. (e.g: user.actions, feedback.actions)

* **_constants**: O diretório _constants contém todas as constantes que são usadas dentro das actions e reducers. 

* **_helpers**: O diretório _helpers contém diversas funções que não se encaixam nas outras pastas mas que ajudam a desempenhar algumas taréfas no código da aplicação.

* **reducers**: O diretório _reducers contém todos os reducers do projeto. Cada reducer age em torno das _actions_ dispachadas dentro do _store_ e retorna um _state_ para cada caso.

* **App**: Container principal que abriga todos os outros sub-containers no projeto.

* **FeedbackPage**: Contém o Componente que abriga todo o código da página de Feedback.

* **Navbar**: Contém o componente que abriga todo o código da barra de navegação.

* **SignIn**:  Contém o componente que abriga todo o código da página de Login.

* **StickyFooter**: Contém o componente que abriga todo o código do StickyFooter (Apenas visível em mobile).

* **Timeline**: Contém o container que abriga todo o código da Timeline.
  *  **TimelimeComponents**: Contém todos os componentes que a Timeline precisa renderizar. E.g:(Posts, Menu lateral, Tipos de post).
