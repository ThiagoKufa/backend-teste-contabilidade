# API cURL Examples

## Product Endpoints

### Create Product
```bash
curl -X POST http://localhost:3030/api/v1/produtos \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Nome do Produto",
    "price": 29.99,
    "stock": 100
  }'
```

### List Products
```bash
curl -X GET http://localhost:3030/api/v1/produtos
```
### Pagination
```bash
curl -X GET http://localhost:3030/api/v1/produtos?page=1&limit=10
```
### Get Product by ID
```bash
curl -X GET http://localhost:3030/api/v1/produtos/1
```

## Customer Endpoints

### Create Customer
```bash
curl -X POST http://localhost:3030/api/v1/clientes \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Nome do Cliente",
    "email": "cliente@example.com"
  }'
```

### List Customers
```bash
curl -X GET http://localhost:3030/api/v1/clientes
```
### Pagination
```bash
curl -X GET http://localhost:3030/api/v1/clientes?page=1&limit=10
```
### Get Customer by ID
```bash
curl -X GET http://localhost:3030/api/v1/clientes/1
```


