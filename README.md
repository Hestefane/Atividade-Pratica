<<<<<<< HEAD
# DESAFIO TYPESCRIPT

Use esse espaço para responder às questões teóricas:

## Instruções
Para executar o projeto, primeiro rode o comando: ```npm i``` para baixar as dependências do projeto.

A função `uuidv4` serve apenas para gerar uma string que será usada como o id quando necessário.

Para compilar e rodar o projeto você primeiro deve executar o comando `npx tsc` para transformar os arquivos `.ts` em `.js`.
Depois disso, os arquivos compilados estarão na pasta `dist`. Para executar, basta executar o seguinte comando: `node ./dist/index.js`.

Decerto algumas dúvidas irão surgir. Não se desespere, tome um ar, tente resolver com calma as questões, e, caso se veja sem saída, peça ajuda :).

## Questões teóricas

- [ ] O que exatamente é o Typescript?

- [ ] Descreva os tipos básicos do Typescript.

- [ ] O que é uma interface?

- [ ] O que é uma classe?
  
- [ ] O que é a herança?
  
- [ ] Quais as vantagens de usar o Typescript ao invés de somente o Javascript?

## Questões práticas
- [ ] Agora que você é bem familiarizado com o Typescript, vamos criar um simples projeto: <br>
Primeiro, clone o repositório anexado em sua máquina;
Como deve ter notado, na pasta `src` temos uma pasta `model` e um arquivo `index.js`. Por enquanto apenas guarde essas informações;

- [ ] Comece pelo arquivo `users.js` na pasta `models`. Nele, você deverá adicionar tipagem para as funções e também para o user. Antes de mais nada renomeie o arquivo para `users.ts`. Um user possui os seguintes atributos: `id`, `name`, `age` e `email`. Use de seu conhecimento na criação de interfaces para resolver esta questão;
  
- [ ] Agora, indo para o arquivo `bankAccount.js` na pasta `models`, você deverá adicionar tipagem para as funções e também para a bankAccount. Como na questão anterior, renomeie o arquivo para `bankAccount.ts`. Nessa questão você deverá identificar quais são os atributos da bankAccount de acordo com o que há disponível nas funções. De novo, use seus conhecimentos sobre interfaces e typescript para resolver a questão.

- [ ] Após ter feito a tipagem dos arquivos da pasta `models` é hora de resolver os erros do arquivo `index.js`. Comece trocando sua extensão para `index.ts`. Você logo verá que alguns erros estão acontecendo. Antes não seria possível identificá-los, pois nenhum dos arquivos possuía tipagem. O que você precisa fazer agora é basicamente corrigir os erros de acordo com o que o intellisense do seu editor de códigos indicar. 

- [ ] Com os erros resolvidos, precisamos apenas testar o código e executar a função de `withdraw` e a função de `deposit` da `bankAccount`. Para isso, primeiro deposite a quantia de 1000 unidades monetárias (um) e faça um saque de 200um. Para verificar se deu tudo certo, use a função `getBankAccountInfo` e dê um `console.log` na conta obtida.

## Desafio extra
- [ ] Refatore o projeto, mas usando classes para criar os `users` e as `bankAccounts`;
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 222b11c (Mapa)
