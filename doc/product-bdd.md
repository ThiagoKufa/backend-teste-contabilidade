### **Recurso: Produtos**

#### **Cenário: Cadastrar um novo produto com sucesso**

  * **URI:** `POST /produtos`
  * **Dado** que a API está rodando
  * **Quando** uma requisição `POST` é feita para `/produtos` com o corpo da requisição:
    ```json
    {
      "nome": "Smartphone",
      "preco": 2500.00,
      "estoque": 50
    }
    ```
  * **Então** a resposta deve ter o código de status **`201 Created`**
  * **E** o corpo da resposta deve ser um objeto JSON contendo o produto recém-criado, incluindo seu `id` e `data_de_criacao`
  * **E** o cabeçalho `Location` deve apontar para o novo recurso, como `/produtos/1`

#### **Cenário: Não permitir o cadastro de um produto sem nome ou preço**

  * **URI:** `POST /produtos`
  * **Dado** que a API está rodando
  * **Quando** uma requisição `POST` é feita para `/produtos` com dados incompletos (ex: sem nome):
    ```json
    {
      "preco": 100.00,
      "estoque": 10
    }
    ```
  * **Então** a resposta deve ter o código de status **`400 Bad Request`**
  * **E** o corpo da resposta deve conter uma mensagem de erro clara, como:
    ```json
    {
      "erro": "O nome e o preço são campos obrigatórios."
    }
    ```

#### **Cenário: Listar todos os produtos**

  * **URI:** `GET /produtos`
  * **Dado** que a API está rodando
  * **E** que o banco de dados contém dois produtos
  * **Quando** uma requisição `GET` é feita para `/produtos`
  * **Então** a resposta deve ter o código de status **`200 OK`**
  * **E** o corpo da resposta deve ser um array JSON contendo a lista completa de produtos

#### **Cenário: Buscar um produto por ID**

  * **URI:** `GET /produtos/:id`
  * **Dado** que a API está rodando
  * **E** que o banco de dados contém um produto com `id = 123`
  * **Quando** uma requisição `GET` é feita para `/produtos/123`
  * **Então** a resposta deve ter o código de status **`200 OK`**
  * **E** o corpo da resposta deve ser um objeto JSON contendo o produto com `id = 123`

#### **Cenário: Lidar com produto não encontrado**

  * **URI:** `GET /produtos/:id`
  * **Dado** que a API está rodando
  * **E** que não existe um produto com `id = 999` no banco de dados
  * **Quando** uma requisição `GET` é feita para `/produtos/999`
  * **Então** a resposta deve ter o código de status **`404 Not Found`**
  * **E** o corpo da resposta deve conter uma mensagem de erro clara
