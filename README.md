# Projeto Cadastro de Usuários

Este projeto implementa duas APIs em Java com Spring Boot, uma conectada ao MongoDB e outra ao MySQL, integradas com um frontend em React para cadastro de usuários. Tudo é orquestrado usando Docker.

## Estrutura do Projeto
- `api-mongodb/`: API Java que armazena dados no MongoDB.
- `api-mysql/`: API Java que armazena dados no MySQL.
- `frontend/`: Interface em React para cadastro de usuários.
- `docker-compose.yml`: Configuração para rodar APIs e bancos com Docker.

## Pré-requisitos
- Java 17
- Maven
- Node.js (para o frontend)
- Docker e Docker Compose

## Como Executar
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/projeto-cadastro-usuarios.git
   ```
2. Compile as APIs:
```bash
cd api-mongodb && mvn clean package
cd ../api-mysql && mvn clean package
```

3. Instale as dependências do frontend:
```bash
cd frontend && npm install
```

4. Suba os serviços com Docker:
```bash
cd .. && docker-compose up --build
```

5. Acesse o frontend em http://localhost:3000.


## Funcionalidades
- Cadastro de usuários com ID, Nome e Telefone.
- Dados salvos simultaneamente no MongoDB e MySQL.
- APIs containerizadas com Docker.

## Tecnologias
- Back-end: Java, Spring Boot, MongoDB, MySQL
- Front-end: React
- Containerização: Docker, Docker Compose