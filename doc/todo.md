## ✅ Checklist do Teste Técnico

- [x] Criar uma **API em Node.js** usando:

  - Node.js puro (`http`) **ou** qualquer biblioteca HTTP (Express, Fastify, etc.)

- [x] Utilizar **SQLite** como banco de dados

- [x] Criar duas tabelas no banco:

  - **produtos** → id, nome, preço, estoque, data de criação
  - **clientes** → id, nome, email, data de criação

- [x] Implementar rotas de **cadastro**:

  - [x] `POST /produtos` → cadastrar produto 
  - [x] `POST /clientes` → cadastrar cliente 

- [ ] Implementar rotas de **consulta**:

  - [x] `GET /produtos` → listar produtos (com paginação ou busca simples)
  - [x] `GET /produtos/:id` → buscar produto por ID
  - [x] `GET /clientes` → listar clientes
  - [x] `GET /clientes/:id` → buscar cliente por ID

- [x] Regras de **validação**:

  - Produto deve ter nome e preço obrigatórios
  - Cliente deve ter nome e email obrigatórios
  - Email de cliente deve ser **único**

- [x] Entregar junto instruções claras de como rodar a API:
  - Instalação de dependências (`npm install`)
  - Execução do projeto (`npm start`)
