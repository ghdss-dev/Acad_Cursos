# Sistema Acad Cursos - Sistema Acadêmico 

Projeto que tem como principio organizar registros de cursos com seus respectivos valores, alunos que tem o interesse de fazer um curso, professores para administrar aquele curso e lideres capacitados
para ajudar alunos iniciantes naquele curso, a obter um bom rendimento nas aulas e provas. 

## Conhecimentos adquiridos nesse projeto 

Integração de APIS - (Interface de Programação de Aplicação), onde foi feito uma arquitetura Monólito para receber na otimização da velocidade 
entre as requisições feitas pelo comando dos usuários. As APIS foram autenticadas através de Tokens que distribui por camadas de segurança 
a geração dos dados por rotas definidas em entidades. Essas informações são geradas pelo SGDB - Sistema de Gerenciamentos de banco de dados, vinda do 
pacote Controller que é responsavel por controlar o fluxo de cadastro, alteração, listagem e exclusão dos dados. Esse pacote vai esta atrelado as camadas
dos services que vai obter a finalidade de cadastrar, alterar, listar e excuir essas informações das tabelas e atributos vindas do banco e vai passar no 
pacote model que é responsavel por criar as entidades para constituir esses resultados de informações. 

Foi usado para o projeto o Dto que obtém a ideia de consistir basicamente, 
o agrupamento de conjunto de atributos em varias classes simples de forma a otimizar a comunicação. 

## Dificuldades adquiridos nesse projeto 

1 - Como pegar dados das entidades Cursos, Professores, Alunos, Dia Aula para coloca dentro de uma tag select no html 

2 - Como mostrar dados dos atributos de Cursos, Professores, Alunos, Lideres, Feriados, Dia Aula e Turmas em uma tela de visualização na web 

3 - Dificuldade em saber listar por id, dentro do Spring Boot os dados que vêm das entidade Curso com os atributos Turmas e Dia_Aula. 

4 - Dificuldade em saber listar por id, dentro do Spring Boot os dados que vêm da entidades Professores e Alunos com os atributo Turmas. 

5 - Orientação a objeção entre os pacotes do Spring boot, sendo realizado um dto 

6 - Dificuldade em atualizar os dados que vêm da tabela consulta la no front - end. 

7 - Relacionamento de Tabelas - um para muitos  

## Tecnologias Utilizadas 

-[Java](https://www.java.com/pt-BR/download/ie_manual.jsp?locale=pt_BR) 

-[JDBC](https://www.oracle.com/br/database/technologies/appdev/jdbc.html) 

-[Mysql](https://www.mysql.com/)

-[Jsp](https://www.ibm.com/docs/pt-br/rsas/7.5.0?topic=files-javaserver-pages-jsp-technology) 

-[Spring Boot](https://spring.io/projects/spring-boot) 

-[Insomnia](https://insomnia.rest/download) 

-[React](https://pt-br.reactjs.org/)

## Depedências do Spring Boot 

-[Lombok](https://imasters.com.br/back-end/projeto-lombok-escrevendo-menos-codigo-em-java) 

-[Spring Dev Tools](https://www.javatpoint.com/spring-boot-devtools) 

-[Maven](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-devtools)

-[Versão 11](https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html)

-[Spring Boot Start Web](https://www.javatpoint.com/spring-boot-starter-web) 

## Depedências do React 

-[Hooks](https://reactjs.org/docs/hooks-intro.html) 

-[Axios](https://axios-http.com/ptbr/docs/intro) 

-[npm react-rout-dom](https://www.npmjs.com/package/react-router-dom) 

-[React Icon Components](https://mui.com/material-ui/icons/)

## Rotas do Spring Boot - Sistema Acadêmico - Acad Cursos

Precisa adicionar essas rotas no Postman, Insomnia ou Navegadores para ver os dados do back - end, vindas pelo banco de dados.

Entidade Aluno - localhost:8050/aluno 

Entidade Curso - localhost:8050/curso

Entidade Dia_Aula - localhost:8050/dia_aula

Entidade Feriado - localhost:8050/feriado 

Entidade Lider - localhost:8050/lider 

Entidade Professor - localhost:8050/professor  

Entidade Turma - localhost:8050/turma  

## Informações sobre a Api do Sistema Acad Cursos 

```bash 
  
  $ Clique na Pasta Api
  
  $ no arquivo Acad.yaml
  
  $ Vai mostrar as todas as informações da API do Sistema, pelo banco de dados no programa Insomnia
```

## Baixar e visualizar o Projeto 

  ```bash 
  
  $ fazer um git clone do projeto pelo terminal, através - https://github.com/ghdss26/Acad_Curso.git
  
  $ Obter o Eclipse ou intellij instalado na sua maquina
  
  $ Ter Instalado e configurado o My Sql Workbench 
  
  $ Obter Java Jre e Jdk na versão 17.0 para ver o funcionamento do projeto e Testar ele
  
  $ Obter sua conexão ativa no Banco de dados como servidor local 
  
  $ Possuir um programa Postman ou Insmonia para copiar e colar as rotas das entidades e ver o crud completo
 
```

## Como executar o projeto no Spring Boot 

## Back end
Pré-requisitos: Java 17

```bash
# clonar repositório
git clone https://github.com/ghdss26/Acad_Curso.git

# entrar na pasta do projeto wco
cd sistema_academico 
cd back-end 

# executar o projeto
./mvnw spring-boot:run
```
