##           API de Cadastro de uma Instituição de Ensino


### Descrição

* O Objetivo deste projeto é construir uma API-REST para realizar o cadastro de uma determinada instituição de ensino, a API-REST deste sistema  contará com 5 tabelas que são: a instituição, curso, disciplina, professores e alunos deverá fazer as inclusão, consulta, alteração e remoção dos dados de todas as cinco tabelas(CRUD).
* As operações de atualização e remoção dos dados só poderão ser feitos se for informado um parâmetro para realizar a busca de um determinado dado por exemplo: para realizar a atualização ou a remoção de um aluno só vai ser possível pelo o seu RGA, todas as operações que envolvem remoção e atualização dos dados precisam de parâmetros para serem executados com sucesso, além da API retornar o status e o código de erro das operações.


### Como Utilizar a API 


* ##### 1°- Baixar o Docker (Caso  já tenha o docker na máquina pule para o próximo passo)

  * ###### Download do Docker:  https://www.docker.com/products/docker-desktop
  
* ##### 2°-  Dentro do diretório do projeto insira o comando abaixo:

  * ###### $: npm install


* ##### 3°- Use o Docker Compose para criar os containers do projeto: 

  * ###### $: docker-compose up


* ##### 4°- Após criar os containers do projeto, entre no container do node-app com o comando abaixo: 

  * ###### $: docker exec -it instituicaodeensino_node-app_1 /bin/sh


* ##### 5°- Em seguida insira os seguintes comandos abaixo na seguinte ordem para criar as tabelas no container do banco db :

  * ###### npx knex migrate:up 20210612160758_create_table_instituicao.js
  * ###### npx knex migrate:up 20210612205206_create_table_curso.js
  * ###### npx knex migrate:up 20210612165851_create_table_aluno.js
  * ###### npx knex migrate:up 20210612234802_create_table_professor.js
  * ###### npx knex migrate:up 20210612213451_create_table_disciplina.js


* ##### 6°- Após inserir os comandos acima, insira os comandos abaixo para colocar as dados na tabela para realizar os testes na API:

  * ###### npx knex seed:run --specific instituicao.js
  * ###### npx knex seed:run --specific cursos.js
  * ###### npx knex seed:run --specific alunos.js
  * ###### npx knex seed:run --specific professores.js
  * ###### npx knex seed:run --specific disciplinas.js


* ##### 7°- Instalar o Insominia ou o Postemam para fazer o CRUD 

  * ###### Download do Insominiar:  https://insomnia.rest/download
  * ###### Download do Postemam:  https://www.postman.com/downloads/
  
* ##### 8°-  Fazendo o CRUD

  * Utilize as seguintes URL´S
  
      * Instituicao
          * ###### GET    : http://localhost:3333/instituicao
          * ###### POST  : http://localhost:3333/instituicao
          * ###### PUT    : http://localhost:3333/instituicao/<nome_instiuicao>
          * ###### DEL    : http://localhost:3333/instituicao/<nome_instituicao>
        
      * Curso
          * ###### GET   : http://localhost:3333/curso
          * ###### POST : http://localhost:3333/curso
          * ###### PUT   : http://localhost:3333/curso/<nome_curso>
          * ###### DEL   : http://localhost:3333/curso/<nome_curso>
          
      * Aluno
          * ###### GET   : http://localhost:3333/aluno
          * ###### POST : http://localhost:3333/aluno
          * ###### PUT   : http://localhost:3333/aluno/<nome_aluno>
          * ###### DEL   : http://localhost:3333/aluno/<nome_aluno>
      
       * Professor
          * ###### GET   : http://localhost:3333/professor
          * ###### POST : http://localhost:3333/professor
          * ###### PUT   : http://localhost:3333/professor/<nome_professor>
          * ###### DEL   : http://localhost:3333/professor/<nome_professor>
      
       * Disciplina
          * ###### GET   : http://localhost:3333/disciplina
          * ###### POST : http://localhost:3333/disciplina
          * ###### PUT   : http://localhost:3333/disciplina/<nome_disciplina>
          * ###### DEL   : http://localhost:3333/disciplina/<nome_disciplina>
      
       
      
      
* Likendim: https://www.linkedin.com/in/emerson-costa-199995169/
