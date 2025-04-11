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