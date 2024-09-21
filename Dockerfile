# Usa a imagem oficial do Node.js 18 como base
FROM node:18

# Define o diretório de trabalho no container
WORKDIR /usr/src/app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "server.js"]
