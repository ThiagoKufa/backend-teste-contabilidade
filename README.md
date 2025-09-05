# Backend - teste Contabilidade

API REST desenvolvida em Node.js com TypeScript, Express e Prisma para gerenciamento de produtos e clientes.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset do JavaScript
- **Express** - Framework web
- **Prisma** - ORM para banco de dados
- **SQLite** - Banco de dados
- **Zod** - Validação de dados

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🔧 Instalação e Configuração

### 1. Clone o repositório e instale as dependências

```bash
# Instale as dependências
npm install
```

### 2. Configuração do Banco de Dados

#### 2.1 Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Database
DATABASE_URL="file:./dev.db"
```

#### 2.2 Gerar o Prisma Client

```bash
npm run prisma:generate
```

#### 2.3 Executar as migrações

```bash
npm run prisma:dev
```

#### 2.4 Popular o banco com dados de exemplo

```bash
npm run seed
```

Este comando irá:
- Limpar dados existentes
- Inserir 10 produtos de exemplo
- Inserir 15 clientes de exemplo

## 🏃‍♂️ Executando o Projeto

### Modo Desenvolvimento

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:3030`

### Modo Produção

```bash
# Compilar o projeto
npm run build

# Executar
npm start
```

## 📚 Scripts Disponíveis

| Comando | Descrição |
|---------|----------|
| `npm run dev` | Inicia o servidor em modo desenvolvimento |
| `npm run build` | Compila o projeto TypeScript |
| `npm start` | Executa o projeto compilado |
| `npm run seed` | Popula o banco com dados de exemplo |
| `npm run db:seed` | Alias para o comando seed |
| `npm run prisma:dev` | Executa migrações do Prisma |
| `npm run prisma:generate` | Gera o Prisma Client |
| `npm run prisma:studio` | Abre o Prisma Studio |

## 🛠 API Endpoints

### Base URL
```
http://localhost:3030/api/v1
```

### Produtos

#### Listar produtos
```http
GET /produtos
```

**Query Parameters:**
- `page` (opcional): Número da página (padrão: 1)
- `limit` (opcional): Itens por página (padrão: 10, máximo: 100)
- `search` (opcional): Busca por nome do produto

**Exemplo:**
```bash
curl -X GET "http://localhost:3030/api/v1/produtos?page=1&limit=5&search=notebook"
```

#### Buscar produto por ID
```http
GET /produtos/:id
```

**Exemplo:**
```bash
curl -X GET http://localhost:3030/api/v1/produtos/1
```

#### Criar produto
```http
POST /produtos
```

**Body:**
```json
{
  "name": "Nome do Produto",
  "price": 29900,
  "stock": 10
}
```

**Exemplo:**
```bash
curl -X POST http://localhost:3030/api/v1/produtos \
  -H "Content-Type: application/json" \
  -d '{"name":"Produto Teste","price":29900,"stock":10}'
```

### Clientes

#### Listar clientes
```http
GET /clientes
```

**Query Parameters:**
- `page` (opcional): Número da página (padrão: 1)
- `limit` (opcional): Itens por página (padrão: 10, máximo: 100)
- `search` (opcional): Busca por nome ou email do cliente

**Exemplo:**
```bash
curl -X GET "http://localhost:3030/api/v1/clientes?page=1&limit=5&search=joão"
```

#### Buscar cliente por ID
```http
GET /clientes/:id
```

**Exemplo:**
```bash
curl -X GET http://localhost:3030/api/v1/clientes/1
```

#### Criar cliente
```http
POST /clientes
```

**Body:**
```json
{
  "name": "Nome do Cliente",
  "email": "cliente@email.com"
}
```

**Exemplo:**
```bash
curl -X POST http://localhost:3030/api/v1/clientes \
  -H "Content-Type: application/json" \
  -d '{"name":"Cliente Teste","email":"teste@email.com"}'
```

## 📊 Estrutura do Banco de Dados

### Tabela: Product
- `productId` (Int, PK, Auto-increment)
- `name` (String)
- `price` (Int) - Preço em centavos
- `stock` (Int, padrão: 0)
- `createdAt` (DateTime)

### Tabela: Customer
- `customerId` (Int, PK, Auto-increment)
- `name` (String)
- `email` (String, Unique)
- `createdAt` (DateTime)

## 🔍 Ferramentas de Desenvolvimento

### Prisma Studio
Para visualizar e editar dados do banco:

```bash
npm run prisma:studio
```

Acesse: `http://localhost:5555`

### Resetar Banco de Dados

Para limpar e repopular o banco:

```bash
# Resetar migrações (apaga todos os dados)
npm run prisma:dev

# Repopular com dados de exemplo
npm run seed
```

## 📁 Estrutura do Projeto

```
src/
├── controller/          # Controllers da API
│   ├── customer/       # Controllers de clientes
│   └── product/        # Controllers de produtos
├── dto/                # Data Transfer Objects
├── lib/                # Configurações e utilitários
├── router/             # Definição das rotas
├── service/            # Lógica de negócio
│   ├── customer/       # Serviços de clientes
│   └── product/        # Serviços de produtos
└── index.ts           # Arquivo principal
```

## 🚨 Troubleshooting

### Erro: "Prisma Client not found"
```bash
npm run prisma:generate
```

### Erro: "Database not found"
```bash
npm run prisma:dev
```

### Porta 3030 já está em uso
Altere a porta no arquivo `src/index.ts` ou finalize o processo que está usando a porta.

## 📝 Notas Importantes

- Os preços são armazenados em **centavos** (ex: R$ 29,90 = 2990)
- O banco SQLite é criado automaticamente no arquivo `prisma/dev.db`
- O script de seed pode ser executado múltiplas vezes (limpa dados antes de inserir)
- Todos os endpoints retornam JSON com estrutura padronizada

**Desenvolvido por:** Thiago Kufa  
**Versão:** 1.0.0
