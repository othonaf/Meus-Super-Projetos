# COMO CRIAR UM DOCKER-COMPOSE DA FORMA CORRETA:

```bash
version: '3.8'

networks:
  fontenelesat:

services:

  # Banco de dados PostgreSQL
  db:
    image: postgres:latest
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD} 
      # Necessário armazenar a senha em um arquivo '.env' e referenciá-la desta forma acima.
      POSTGRES_DB: fontenele_sat
    ports:
      - 5432:5432
    networks:
      - fontenelesat

  # Aplicação Frontend React.js
  frontend:
    build:
      context: ./Frontend/fontenelesat
      dockerfile: Dockerfile
    image: node:latest
    volumes:
      - ./Frontend/fontenelesat:/app
    ports:
      - 3000:3000
    depends_on:
      - backend  
    networks:
      - fontenelesat

  # Aplicação Backend Node.js
  backend:
    build:
      context: ./Backend
      dockerfile: Dockerfile
    image: node:latest
    volumes:
      - ./Backend:/app
    ports:
      - 3003:3003
    depends_on:
      - db
    networks:
      - fontenelesat
```