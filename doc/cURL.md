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
