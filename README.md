# API de Usuários e Autenticação

API REST desenvolvida com Node.js e MongoDB para gerenciamento de usuários e autenticação via JWT.  
Ideal para aplicações que exigem controle de acesso, login seguro e rotas protegidas.

---

## Tecnologias Utilizadas

- **Node.js** + **Express** — Framework para construção da API
- **MongoDB** + **Mongoose** — Banco de dados NoSQL
- **JWT (JSON Web Token)** — Autenticação segura
- **bcrypt** — Criptografia de senhas
- **dotenv** — Gerenciamento de variáveis de ambiente
- **Swagger** — Documentação dos endpoints
- **Docker** + **Docker Compose** — Containerização da aplicação
- **Jest** + **Supertest** — Testes automatizados

---

## Estrutura do Projeto
api-users-auth/
├── src/                     # Código-fonte principal
│   ├── config/              # Conexão com MongoDB
│   ├── controllers/         # Funções que recebem as requisições HTTP
│   ├── middleware/          # Autenticação e autorização
│   ├── models/              # Modelos de dados (User)
│   ├── routes/              # Definição das rotas da API
│   ├── services/            # Regras de negócio (login, cadastro, etc.)
│   └── utils/               # Funções auxiliares (hash de senha, JWT, etc.)
│
├── tests/                   # Testes automatizados com Jest e Supertest
├── docs/                    # Documentação adicional (Swagger, diagramas)
│
├── .env                     # Variáveis de ambiente
├── .gitignore               # Arquivos ignorados pelo Git
├── Dockerfile               # Configuração do container da API
├── docker-compose.yml       # Orquestração dos containers (API + MongoDB)
├── README.md                # Manual do projeto
├── package.json             # Configuração do projeto Node.js
└── swagger.yaml             # Documentação dos endpoints via Swagger


api-users-auth/ ┣ src/ ┃ ┣ config/ # Conexão com MongoDB ┃ ┣ controllers/ # Lógica das rotas ┃ ┣ middleware/ # Autenticação e autorização ┃ ┣ models/ # Modelos de dados (User) ┃ ┣ routes/ # Definição das rotas ┃ ┣ services/ # Regras de negócio ┃ ┗ utils/ # Funções auxiliares (hash, token) ┣ tests/ # Testes automatizados ┣ docs/ # Documentação adicional ┣ .env # Variáveis de ambiente ┣ .gitignore # Arquivos ignorados pelo Git ┣ Dockerfile # Configuração do container ┣ docker-compose.yml ┣ README.md # Manual do projeto ┣ package.json # Configuração do Node.js ┗ swagger.yaml # Documentação Swagger

## Tecnologias
Node.js, Express, MongoDB (Mongoose), JWT, bcrypt, Swagger, Jest, Docker.

## Como Rodar o Projeto

- Docker e Docker Compose instalados  
- Node.js (opcional, para rodar localmente sem Docker)

## Rodando com Docker
```bash
docker compose up --build
```

## Acesse:

API: http://localhost:3000
Swagger: http://localhost:3000/api-docs

## Autenticação

A autenticação é feita via JWT. Após login, o token deve ser enviado no header:

exemplo, registro de usuário:
```bash
➜  api-users-auth git:(master) ✗ curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Felipe","email":"felipe@example.com","password":"senha123"}'

{"user":{"name":"Felipe","email":"felipe@example.com","role":"user","_id":"691ccc9035416aa48b4176f6","createdAt":"2025-11-18T19:44:16.950Z","updatedAt":"2025-11-18T19:44:16.950Z","__v":0},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OTFjY2M5MDM1NDE2YWE0OGI0MTc2ZjYiLCJlbWFpbCI6ImZlbGlwZUBleGFtcGxlLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzYzNDk1MDU2LCJleHAiOjE3NjM1ODE0NTZ9.ll6c7UcH7zrJRkZpTLOufvZv2UCjug5VZ5sFreJI9tw"}%
```
Ele gera o ID do usuário e o token.




