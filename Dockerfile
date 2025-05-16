# Etapa 1: Build da aplicação
FROM node:18 AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Build da aplicação React
RUN npm run build

# Etapa 2: Servir com nginx
FROM nginx:alpine

# Remove os arquivos padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos build da etapa anterior para o nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Copia uma configuração customizada do nginx (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expõe a porta padrão
EXPOSE 80

# Comando padrão para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]
