
### **Recurso: Clientes**

#### **Cenário: Cadastrar um novo cliente com sucesso**

  * **URI:** `POST /clientes`
  * **Dado** que a API está rodando
  * **Quando** uma requisição `POST` é feita para `/clientes` com o corpo da requisição:
    ```json
    {
      "nome": "João da Silva",
      "email": "joao.silva@exemplo.com"
    }
    ```
  * **Então** a resposta deve ter o código de status **`201 Created`**
  * **E** o corpo da resposta deve ser um objeto JSON contendo o cliente recém-criado, incluindo seu `id` e `data_de_criacao`
  * **E** o cabeçalho `Location` deve apontar para o novo recurso, como `/clientes/1`

#### **Cenário: Não permitir o cadastro de um cliente sem nome ou email**

  * **URI:** `POST /clientes`
  * **Dado** que a API está rodando
  * **Quando** uma requisição `POST` é feita para `/clientes` com dados incompletos (ex: sem email):
    ```json
    {
      "nome": "Maria de Souza"
    }
    ```
  * **Então** a resposta deve ter o código de status **`400 Bad Request`**
  * **E** o corpo da resposta deve conter uma mensagem de erro clara

#### **Cenário: Não permitir o cadastro de um cliente com email já existente**

  * **URI:** `POST /clientes`
  * **Dado** que a API está rodando
  * **E** que o banco de dados já contém um cliente com o email "joao.silva@exemplo.com"
  * **Quando** uma requisição `POST` é feita para `/clientes` com o corpo da requisição:
    ```json
    {
      "nome": "Pedro Santos",
      "email": "joao.silva@exemplo.com"
    }
    ```
  * **Então** a resposta deve ter o código de status **`409 Conflict`**
  * **E** o corpo da resposta deve conter uma mensagem de erro, como:
    ```json
    {
      "erro": "O e-mail informado já está em uso."
    }
    ```

#### **Cenário: Listar todos os clientes**

  * **URI:** `GET /clientes`
  * **Dado** que a API está rodando
  * **E** que o banco de dados contém dois clientes
  * **Quando** uma requisição `GET` é feita para `/clientes`
  * **Então** a resposta deve ter o código de status **`200 OK`**
  * **E** o corpo da resposta deve ser um array JSON contendo a lista completa de clientes

#### **Cenário: Buscar um cliente por ID**

  * **URI:** `GET /clientes/:id`
  * **Dado** que a API está rodando
  * **E** que o banco de dados contém um cliente com `id = 456`
  * **Quando** uma requisição `GET` é feita para `/clientes/456`
  * **Então** a resposta deve ter o código de status **`200 OK`**
  * **E** o corpo da resposta deve ser um objeto JSON contendo o cliente com `id = 456`

#### **Cenário: Lidar com cliente não encontrado**

  * **URI:** `GET /clientes/:id`
  * **Dado** que a API está rodando
  * **E** que não existe um cliente com `id = 999` no banco de dados
  * **Quando** uma requisição `GET` é feita para `/clientes/999`
  * **Então** a resposta deve ter o código de status **`404 Not Found`**
  * **E** o corpo da resposta deve conter uma mensagem de erro clara