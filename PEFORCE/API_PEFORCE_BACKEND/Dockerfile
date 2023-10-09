# Puxe uma imagem base
FROM node:18.17.1

# Defina o diretório de trabalho no container
WORKDIR /app/backend

# Copie o arquivo package.json e o arquivo package-lock.json (se disponível)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie os arquivos do projeto para o diretório de trabalho (por exemplo: app directory)
COPY . .

# Torne a porta 3003 disponível para o mundo fora deste container
EXPOSE 3003

# Execute a aplicação quando o container for iniciado
CMD [ "npm", "start" ]
