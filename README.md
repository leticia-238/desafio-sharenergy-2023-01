<h1 align="center">
  Aplicação Web 
</h1>

&emsp;

## Sobre o projeto

***Projeto realizado em Janeiro de 2022.***

Esta aplicação permite ao usuário:

- Fazer login e ser autenticado
- Visualizar uma lista com usuários e suas informações 
- Informar um status HTTP num campo de entrada e visualizar a imagem correspondente recebida pela API [HTTP Cats](https://http.cat/).

<p align="center">
  <img width="500px" src="./screen-login.png" alt="Tela de login" />
</p>

<p align="center">
  <img width="500px" src="./screen-user-list.png" alt="Tela com a lista de usuários" />
</p>

<p align="center">
  <img width="500px" src="./screen-http-cats.png" alt="Tela com o status HTTP Cats" />
</p>

## Tecnologias e Ferramentas utilizadas

### Frontend 

- Aplicação feita com [ReactJs](https://pt-br.reactjs.org/docs/getting-started.html) utilizando a ferramenta [Vite](https://vitejs.dev/) para iniciar o ambiente de desenvolvimento
- [React Router](https://v5.reactrouter.com/) para navegação entre as rotas
- [Tailwind CSS](https://tailwindcss.com/) para a estilização das páginas

### Backend

- Aplicação feita com [ExpressJs](https://expressjs.com/pt-br/)
- Desenvolvido com [Typescript](https://www.typescriptlang.org/) e [POO](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_orientada_a_objetos)
- [Mongoose](https://www.typescriptlang.org/) para a modelagem de dados com o [MongoDB]()
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken) para a autenticação
- [Zod](https://github.com/colinhacks/zod) para validação dos dados das requisições

### Geral

- [ESLint](https://eslint.org/) para verificação e formatação do código
- [Docker](https://www.docker.com/) para gerenciamento dos conteineres

## Instruções para a instalação

### Pré-requisitos para iniciar a aplicação no computador

- node v18 e docker

### Execute os seguintes passos no terminal

1. Clone o projeto:

    ```bash
    git clone git@github.com:leticia-238/app-fullstack.git`
    ```
2. Entre na pasta do repositório clonado:
    ```bash
    cd app-fullstack
    ```
    
#### Iniciando a aplicação Frontend:

1. Entre na pasta correspondente
    ```bash
    cd frontend
    ```
2. Instale as dependências 
    ```bash
    npm install
    ```
3. Inicie a aplicação 
    ```bash
    npm run build && npm run preview
    ```
> A aplicação iniciará no endereço http://localhost:4173/ no navegador

#### Iniciando a aplicação Backend:

1. Entre na pasta correspondente
    ```bash
    cd backend
    ```
2. Instale as dependências 
    ```bash
    npm install
    ```
3. Caso não tenha o MongoDB instalado em sua máquina crie um container com docker
    ```bash
    docker run --name app-fullstack_db -p 27017:27017 -d mongo:5.0.7
    ``` 
3. Inicie a aplicação 
    ```bash
    npm run build && npm run start
    ```
    
    