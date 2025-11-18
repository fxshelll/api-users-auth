# API de Usuários e Autenticação

API REST para cadastro, login e gerenciamento de usuários com JWT e MongoDB.

## Tecnologias
Node.js, Express, MongoDB (Mongoose), JWT, bcrypt, Swagger, Jest, Docker.

## Como rodar
- Com Docker:
  docker compose up --build
  Acesse http://localhost:3000 e documentação em http://localhost:3000/api-docs

- Sem Docker:
  npm install
  npm run dev
  Crie .env com MONGODB_URI, JWT_SECRET, JWT_EXPIRES_IN, PORT.

## Endpoints
- POST /auth/register
- POST /auth/login
- GET /users/:id (Bearer token)
- PUT /users/:id (Bearer token)
- DELETE /users/:id (Bearer token)
