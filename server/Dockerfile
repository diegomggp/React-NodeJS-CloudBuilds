# Utilizar la imagen base de Node.js 14
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el código del servidor al directorio de trabajo
COPY . /app/server

# Eliminar el directorio node_modules y el archivo package-lock.json si existen
RUN rm -rf /app/server/node_modules /app/server/package-lock.json

# Instalar las dependencias del servidor
RUN cd /app/server && npm install

# Definir una variable de entorno para la clave de conexión a MongoDB
ENV DB_URL_ATLAS=

# Iniciar el servidor
CMD ["sh", "-c", "cd /app/server && npm start"]
