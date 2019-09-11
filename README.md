# Matrículas 1.0
Esta é aplicação de demonstração conforme caso de uso proposto.

Este projeto foi construído com Frontend em Angular, backend em Nodejs e base de dados em MongoDB.

Step by step article on 

## Como instalar o aplicação?
- Baixe e instale o MongoDB 4.2.
- Baixe e instale o NodeJs 10.16.
- Execute `npm install -g @angular/cli@8.3.3` para instalar o angular cli 8.3.3.
- Execute `npm install -g nodemon` para instalar o nodemon.
- Execute `npm install` para instalar todas as dependências da aplicação.
- Execute `ng serve` para executar a aplicação frontend.
- Inicie o backend da seguinte forma:
  - `cd backend` para entrar no diretório do backend.
  - `nodemon server` para iniciar o nodemon
 
## Como usar a aplicação?
- Acesse no navegador o endereço http://localhost:4200
- O itens do menu superior possui a possibilidade de cadastramento das principais informações necessárias funcionamento do projeto. 
Cadastre as informações seguindo o menu da esqueda para a direita e depois de configurar corretamente os Turnos, Tipos de Cursos, Cursos e Unidades
 será possível cadastrar um aluno e a matrícula dele em um curso;
- No item da unidade é possível definir quais cursos estarão disponíveis para matrícula e configurar as respectivas quantidade de vagas; 
- Conforme exercício proposto, o aluno só poderá se cadastrar em cursos que tenham vagas disponíveis;  
