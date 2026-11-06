# Atas das Sprints — Gerenciador Financeiro

**Projeto:** Gerenciador Financeiro  
**Disciplina:** Projeto de Desenvolvimento de Negócios  
**Curso:** Análise e Desenvolvimento de Sistemas  
**Semestre:** 2026/2

## Sprint 1 — Planejamento e interface

**Atividades realizadas:**

Foi definido o desenvolvimento de um sistema de gerenciamento de finanças pessoais. Foram escolhidas as tecnologias HTML, CSS e JavaScript e criada a estrutura inicial do projeto.

Também foi desenvolvida a interface com os campos de receitas, despesas, saldo total e cadastro de movimentações.

**Decisões tomadas:**

Optou-se por uma interface simples, com as principais informações financeiras na tela inicial.

**Dificuldades encontradas:**

Não foram registrados bloqueios importantes nesta etapa.

**Resultado:** Interface inicial desenvolvida.

---

## Sprint 2 — Funcionalidades do sistema

**Atividades realizadas:**

Foram implementadas as funcionalidades de cadastro de receitas e despesas, listagem das movimentações, exclusão de registros e cálculo automático do saldo.

Inicialmente, os dados foram armazenados no navegador utilizando localStorage.

**Decisões tomadas:**

Foi decidido implementar primeiro as funcionalidades básicas e posteriormente integrar o sistema ao banco de dados.

**Dificuldades encontradas:**

Foi necessário organizar a atualização dos valores e da listagem após o cadastro ou exclusão das movimentações.

**Resultado:** Funcionalidades principais implementadas.

---

## Sprint 3 — Banco de dados e integração

**Atividades realizadas:**

Foi instalado o Node.js e configurado o servidor utilizando Express. Também foi criado o banco de dados SQLite, com a tabela de movimentações.

Foram desenvolvidas as rotas para cadastrar, consultar e excluir movimentações, integrando o JavaScript da interface ao servidor.

**Decisões tomadas:**

Foi escolhido o SQLite por ser um banco de dados simples e adequado às necessidades do MVP.

**Dificuldades encontradas:**

Foi necessário compreender a diferença entre o endereço do Live Server e o endereço do servidor Node.js.

**Resultado:** Sistema integrado ao banco de dados.

---

## Sprint 4 — Testes e documentação

**Atividades realizadas:**

Foram realizados testes de cadastro, exclusão, cálculo do saldo e persistência dos dados. Todos os seis testes definidos foram concluídos com sucesso.

O projeto foi organizado e publicado no GitHub. Também foram preparados o diagrama de arquitetura, o DER e o Sprint Backlog.

**Decisões tomadas:**

Foi decidido manter o MVP com as funcionalidades essenciais e organizar os artefatos em um único documento para a entrega da AP2.

**Dificuldades encontradas:**

Durante a configuração do Git, o VS Code identificou inicialmente um repositório em uma pasta incorreta. O problema foi resolvido inicializando o Git diretamente na pasta do projeto.

**Resultado:** MVP testado e documentação em preparação.

---

## Considerações finais

O desenvolvimento do Gerenciador Financeiro permitiu aplicar conhecimentos de HTML, CSS, JavaScript, Node.js, Express e SQLite.

O MVP desenvolvido permite cadastrar receitas e despesas, consultar movimentações, excluir registros e acompanhar o saldo financeiro.

As funcionalidades principais foram testadas e o código-fonte foi disponibilizado no GitHub.

**Repositório:**  
https://github.com/jackdemetrio/gerenciador_financeiro
